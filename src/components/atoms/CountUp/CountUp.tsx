"use client";

import { useRef, type ReactNode } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import styles from "./CountUp.module.css";

export interface CountUpProps {
  readonly to: number;
  readonly suffix?: string;
  readonly durationMs: number;
  /** Stagger offset, so a row of numbers rolls one after another. */
  readonly delayMs?: number;
}

/**
 * A number that counts up from zero when it scrolls into view.
 * A hidden copy of the final value reserves the width, so nothing shifts while it counts,
 * and screen readers only ever hear the final value.
 */
export function CountUp({ to, suffix = "", durationMs, delayMs = 0 }: CountUpProps): ReactNode {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();
  const inView = useInView(ref, { threshold: 0.4 });
  const value = useCountUp({ to, durationMs, delayMs, enabled: !reduced, start: inView });
  const final = `${String(to)}${suffix}`;

  return (
    <span ref={ref} className={styles.root}>
      <span className={styles.sizer} aria-hidden="true">
        {final}
      </span>
      <span className={styles.value} aria-hidden="true">
        {`${String(value)}${suffix}`}
      </span>
      <span className="sr-only">{final}</span>
    </span>
  );
}
