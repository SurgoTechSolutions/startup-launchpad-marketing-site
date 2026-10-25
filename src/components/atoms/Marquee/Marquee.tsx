"use client";

import { Children, useRef, type CSSProperties, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cx } from "@/lib/cx";
import styles from "./Marquee.module.css";

/** Seconds each item takes to pass, so rows move at the same reading pace however long they are. */
const SECONDS_PER_ITEM = 11;
/** Share of normal speed while the pointer is over the rows. */
const HOVER_SPEED = 0.35;
/** How long the change of speed takes, in milliseconds. */
const EASE_MS = 500;

export interface MarqueeProps {
  /** Each entry is one row of items. Odd rows scroll the other way. */
  readonly rows: readonly ReactNode[];
  readonly className?: string | undefined;
}

/**
 * Rows that scroll sideways on a loop. Each row is rendered twice, the copy hidden from
 * assistive tech, so the loop is seamless. Items must not hold links or buttons, since the copy
 * would put a hidden duplicate of each in the tab order. Hovering eases the rows down to a slower
 * pace rather than stopping them. With reduced motion, or before hydration, the rows are a plain
 * horizontal scroller with no copies.
 */
export function Marquee({ rows, className }: MarqueeProps): ReactNode {
  const animate = !usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  /**
   * Eases every row's playback rate to the target, so the speed changes without a jump. Only the
   * rows' own scroll is touched, not animations on the items inside them.
   */
  const easeTo = (target: number): void => {
    const container = ref.current;
    if (container === null) return;
    const animations = container
      .getAnimations({ subtree: true })
      .filter(
        (animation) =>
          animation.effect instanceof KeyframeEffect &&
          animation.effect.target?.parentElement === container,
      );
    const first = animations[0];
    if (first === undefined) return;
    const from = first.playbackRate;
    const start = performance.now();
    cancelAnimationFrame(frame.current);
    const step = (now: number): void => {
      const t = Math.min((now - start) / EASE_MS, 1);
      const eased = 1 - (1 - t) ** 3;
      const rate = from + (target - from) * eased;
      for (const animation of animations) animation.updatePlaybackRate(rate);
      if (t < 1) frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  };

  return (
    <div
      ref={ref}
      className={cx(styles.marquee, animate && styles.animated, className)}
      onMouseEnter={() => {
        easeTo(HOVER_SPEED);
      }}
      onMouseLeave={() => {
        easeTo(1);
      }}
    >
      {rows.map((row, index) => (
        // Rows are static content, so their position is a stable key.
        <div
          key={index}
          className={cx(styles.row, index % 2 === 1 && styles.reverse)}
          style={{ "--duration": `${String(Children.count(row) * SECONDS_PER_ITEM)}s` } as CSSProperties}
        >
          {row}
          {animate && (
            // Hidden from assistive tech but not inert, so the copied items still react to hover.
            // Nothing in them can take focus, so the copy adds nothing to the tab order.
            <div className={styles.copy} aria-hidden="true">
              {row}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
