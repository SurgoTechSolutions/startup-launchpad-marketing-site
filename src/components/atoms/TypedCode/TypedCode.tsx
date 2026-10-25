"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { cx } from "@/lib/cx";
import styles from "./TypedCode.module.css";

export interface TypedCodeProps {
  readonly text: string;
  /** How long to wait once it is fully in view before typing starts. */
  readonly delayMs?: number;
  /** Milliseconds per character. */
  readonly speedMs?: number;
  readonly className?: string | undefined;
}

/**
 * A line of code that types itself out, with a caret, once it has scrolled fully into view.
 * A hidden copy of the full text reserves the space, so nothing shifts while it types, and
 * screen readers only ever hear the full text. The server, and reduced motion, show it whole.
 */
export function TypedCode({ text, delayMs = 0, speedMs = 28, className }: TypedCodeProps): ReactNode {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const inView = useInView(ref, { threshold: 1 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || reduced) return undefined;
    const timer = window.setTimeout(() => {
      setStarted(true);
    }, delayMs);
    return () => {
      window.clearTimeout(timer);
    };
  }, [inView, reduced, delayMs]);

  const { output, done } = useTypewriter(text, { speedMs, active: started });

  return (
    <code ref={ref} className={cx(styles.root, className)}>
      <span className={styles.sizer} aria-hidden="true">
        {text}
      </span>
      <span className={styles.live} aria-hidden="true" data-typing={started && !done ? "" : undefined}>
        {reduced ? text : output}
      </span>
      <span className="sr-only">{text}</span>
    </code>
  );
}
