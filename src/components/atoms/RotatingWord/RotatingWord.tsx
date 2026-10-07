"use client";

import { useState, type ReactNode } from "react";
import { useInterval } from "@/hooks/useInterval";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cx } from "@/lib/cx";
import { Highlight } from "../Highlight";
import styles from "./RotatingWord.module.css";

const ROTATE_EVERY_MS = 2500;

export interface RotatingWordProps {
  /** Words to cycle through. The first is shown before hydration and to screen readers. */
  readonly words: readonly string[];
  /** Plain punctuation after the word, e.g. "?". */
  readonly suffix?: string;
}

/**
 * A highlighted word that rolls through alternatives. Every word shares one grid cell, so
 * the slot is always as wide as the longest word and the heading never shifts. Screen
 * readers hear only the first word. With reduced motion it stays on the first word.
 */
export function RotatingWord({ words, suffix = "" }: RotatingWordProps): ReactNode {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);

  useInterval(
    () => {
      setPrevious(index);
      setIndex((index + 1) % words.length);
    },
    reduced || words.length < 2 ? null : ROTATE_EVERY_MS,
  );

  return (
    <span className={styles.root}>
      <span className="sr-only">
        {words[0]}
        {suffix}
      </span>
      <span className={styles.stack} aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={word}
            className={cx(styles.word, i === index && styles.active, i === previous && i !== index && styles.leaving)}
          >
            <Highlight>{word}</Highlight>
            {suffix}
          </span>
        ))}
      </span>
    </span>
  );
}
