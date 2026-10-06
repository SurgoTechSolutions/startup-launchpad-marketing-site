"use client";

import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cx } from "@/lib/cx";
import styles from "./Marquee.module.css";

export interface MarqueeProps {
  /** Each entry is one row of items. Odd rows scroll the other way. */
  readonly rows: readonly ReactNode[];
  readonly className?: string | undefined;
}

/**
 * Rows that scroll sideways on a loop. Each row is rendered twice, the copy hidden from
 * assistive tech, so the loop is seamless. With reduced motion, or before hydration,
 * the rows are a plain horizontal scroller with no copies.
 */
export function Marquee({ rows, className }: MarqueeProps): ReactNode {
  const animate = !usePrefersReducedMotion();

  return (
    <div className={cx(styles.marquee, animate && styles.animated, className)}>
      {rows.map((row, index) => (
        // Rows are static content, so their position is a stable key.
        <div key={index} className={cx(styles.row, index % 2 === 1 && styles.reverse)}>
          {row}
          {animate && (
            <div className={styles.copy} aria-hidden="true" inert>
              {row}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
