"use client";

import { useState, type ReactNode } from "react";
import { useInterval } from "@/hooks/useInterval";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cx } from "@/lib/cx";
import styles from "./HeroQuoteRotator.module.css";

const ROTATE_EVERY_MS = 4500;

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
  const [{ active, leaving, back }, setShown] = useState<{
    active: number;
    leaving: number | null;
    back: boolean;
  }>({ active: 0, leaving: null, back: false });
  /** Moves to the next quote, or to one picked with the dots. */
  const show = (target: "next" | number): void => {
    setShown((shown) => {
      const next = target === "next" ? (shown.active + 1) % slides.length : target;
      if (next === shown.active) return shown;
      return { active: next, leaving: shown.active, back: target !== "next" && next < shown.active };
    });
  };

  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  useInterval(
    () => {
      show("next");
    },
    reduced || paused || stopped || slides.length < 2 ? null : intervalMs,
  );

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
    >
      <div className={styles.slides}>
        {slides.map((slide, index) => {
          const isActive = index === active;
          return (
            <div
              // Slides are static content, so their position is a stable key.
              key={index}
              className={cx(
                styles.slide,
                isActive && styles.active,
                // Only animate once something has changed, so the first quote doesn't slide in on load.
                isActive && leaving !== null && (back ? styles.fromLeft : styles.fromRight),
                index === leaving && (back ? styles.toRight : styles.toLeft),
              )}
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
