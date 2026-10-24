"use client";

import {
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { useInterval } from "@/hooks/useInterval";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cx } from "@/lib/cx";
import styles from "./HeroQuoteRotator.module.css";

const ROTATE_EVERY_MS = 4500;
/** How far a finger must travel before the card treats it as a swipe rather than a scroll. */
const DRAG_START_PX = 8;
/** How far a drag must go before letting go moves to another quote. */
const SWIPE_PX = 40;

export interface HeroQuoteRotatorProps {
  /** One rendered quote per slide, built on the server. */
  readonly slides: readonly ReactNode[];
  /** One label per slide, for its dot button. */
  readonly dotLabels: readonly string[];
  readonly label: string;
  /** Set false to drop the card frame, e.g. under the pricing plans. */
  readonly framed?: boolean;
  /** Time each quote stays up, in milliseconds. */
  readonly intervalMs?: number;
}

/**
 * The hero quote card. Every slide sits in the same grid cell, so the card is always as
 * tall as the longest quote and never jumps. Slides swipe across every 4.5 seconds, pause
 * while hovered or focused, and stop once a visitor picks one with the dots. With reduced
 * motion, or without JavaScript, the first slide stays put.
 *
 * Visitors can also swipe or drag the card sideways, or use the arrow keys while a dot has
 * focus. The quote follows the finger, and either moves on or springs back when let go.
 * Unlike the dots, swiping keeps the quotes turning over, starting the wait afresh.
 */
export function HeroQuoteRotator({
  slides,
  dotLabels,
  label,
  framed = true,
  intervalMs = ROTATE_EVERY_MS,
}: HeroQuoteRotatorProps): ReactNode {
  const reduced = usePrefersReducedMotion();
  // The quote showing, the one swiping out, and which way they move. Going forward, the new
  // quote comes in from the right; going back to an earlier one, it comes in from the left.
  // After a swipe, `from` is how far the finger had dragged, so the swipe carries on from there.
  const [{ active, leaving, back, from }, setShown] = useState<{
    active: number;
    leaving: number | null;
    back: boolean;
    from: number;
  }>({ active: 0, leaving: null, back: false, from: 0 });
  /** Moves to the next or previous quote, or to one picked with the dots. */
  const show = (target: "next" | "prev" | number, dragged = 0): void => {
    setShown((shown) => {
      const next =
        target === "next"
          ? (shown.active + 1) % slides.length
          : target === "prev"
            ? (shown.active - 1 + slides.length) % slides.length
            : target;
      if (next === shown.active) return shown;
      const goingBack =
        target === "prev" ||
        (typeof target === "number" && next < shown.active);
      return {
        active: next,
        leaving: shown.active,
        back: goingBack,
        from: dragged,
      };
    });
  };

  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);
  /** How far the showing quote is dragged sideways, or null when it isn't being dragged. */
  const [drag, setDrag] = useState<number | null>(null);
  // Where the pointer went down, and whether the gesture has turned out to be sideways.
  const pointer = useRef<{
    id: number;
    x: number;
    y: number;
    sideways: boolean;
  } | null>(null);

  useInterval(
    () => {
      show("next");
    },
    reduced || paused || stopped || drag !== null || slides.length < 2
      ? null
      : intervalMs,
    // A fresh wait after every change, so a swiped-to quote gets its full time on screen.
    active,
  );

  const swipeable = slides.length > 1;
  /** The quote a drag is heading for: the next one when dragging left, the previous when right. */
  const peek =
    drag !== null && drag < 0
      ? (active + 1) % slides.length
      : (active - 1 + slides.length) % slides.length;

  const onPointerDown = (event: PointerEvent<HTMLDivElement>): void => {
    if (!swipeable || (event.pointerType === "mouse" && event.button !== 0))
      return;
    pointer.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      sideways: false,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>): void => {
    const start = pointer.current;
    if (start?.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (!start.sideways) {
      // Mostly up or down: leave it to the page to scroll.
      if (Math.abs(dy) > DRAG_START_PX && Math.abs(dy) >= Math.abs(dx)) {
        pointer.current = null;
        return;
      }
      if (Math.abs(dx) <= DRAG_START_PX) return;
      start.sideways = true;
      // Drop the last swipe's animations, so the quote that swiped out can peek back in.
      setShown((shown) =>
        shown.leaving === null ? shown : { ...shown, leaving: null },
      );
      // Keeps the drag going when the finger strays off the card. Throws if the pointer has
      // already gone, which is harmless: the drag still works, just without the capture.
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        // Nothing to do.
      }
    }
    setDrag(dx);
  };

  const onPointerEnd = (event: PointerEvent<HTMLDivElement>): void => {
    const start = pointer.current;
    if (start?.id !== event.pointerId) return;
    pointer.current = null;
    if (!start.sideways) return;
    const dx = event.type === "pointercancel" ? 0 : event.clientX - start.x;
    setDrag(null);
    if (Math.abs(dx) < SWIPE_PX) return;
    show(dx < 0 ? "next" : "prev", dx);
  };

  return (
    <div
      className={cx(styles.frame, !framed && styles.bare)}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => {
        setPaused(true);
      }}
      onMouseLeave={() => {
        setPaused(false);
      }}
      onFocus={() => {
        setPaused(true);
      }}
      onBlur={() => {
        setPaused(false);
      }}
      onKeyDown={(event) => {
        if (
          !swipeable ||
          (event.key !== "ArrowLeft" && event.key !== "ArrowRight")
        )
          return;
        event.preventDefault();
        show(event.key === "ArrowRight" ? "next" : "prev");
      }}
    >
      <div
        className={cx(
          styles.slides,
          swipeable && styles.swipeable,
          drag !== null && styles.dragging,
        )}
        style={{ "--from": `${String(from)}px` } as CSSProperties}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
      >
        {slides.map((slide, index) => {
          const isActive = index === active;
          // While dragging, the quote that would come in peeks in beside the one showing.
          const isPeek = drag !== null && drag !== 0 && index === peek;
          return (
            <div
              // Slides are static content, so their position is a stable key.
              key={index}
              className={cx(
                styles.slide,
                (isActive || isPeek) && styles.active,
                // Only animate once something has changed, so the first quote doesn't slide in on load.
                isActive &&
                  leaving !== null &&
                  (back ? styles.fromLeft : styles.fromRight),
                index === leaving && (back ? styles.toRight : styles.toLeft),
              )}
              style={
                isActive && drag !== null
                  ? { translate: `${String(drag)}px 0` }
                  : isPeek
                    ? {
                        translate: `calc(${drag < 0 ? "100%" : "-100%"} + ${String(drag)}px) 0`,
                      }
                    : undefined
              }
              aria-hidden={!isActive}
              inert={!isActive}
            >
              {slide}
            </div>
          );
        })}
      </div>
      {slides.length > 1 && (
        <div className={styles.dots}>
          {dotLabels.map((dotLabel, index) => (
            <button
              key={dotLabel}
              type="button"
              className={cx(styles.dot, index === active && styles.dotActive)}
              aria-label={dotLabel}
              aria-current={index === active}
              onClick={() => {
                show(index);
                setStopped(true);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
