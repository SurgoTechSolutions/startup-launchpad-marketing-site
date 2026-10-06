"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { cx } from "@/lib/cx";
import type { TerminalContent, TerminalLine } from "@/types";
import styles from "./FixTerminal.module.css";

export interface FixTerminalProps {
  readonly content: TerminalContent;
}

const PROMPT_MARKS = { input: ">", ok: "✓" } as const;

/** Timings from the mock-up. */
const START_DELAY_MS = 250;
const FIRST_LINE_SPEED_MS = 28;
const LINE_SPEED_MS = 42;
const AFTER_FIRST_LINE_MS = 450;
const INSTANT_LINE_MS = 420;

/**
 * "final" shows every line (server render, reduced motion).
 * "armed" hides the lines until the terminal scrolls into view.
 * "running" reveals lines in order, typing the ones marked typed.
 */
type Phase = "final" | "armed" | "running";

function Line({ line, text, hidden }: { readonly line: TerminalLine; readonly text: string; readonly hidden: boolean }): ReactNode {
  const className = cx(styles.line, styles[line.kind], hidden && styles.hidden);

  if (line.kind === "question") {
    return (
      <div className={className}>
        <span>{text}</span>
        <i className={styles.cursor} />
      </div>
    );
  }

  return (
    <div className={className}>
      <b>{PROMPT_MARKS[line.kind]}</b> <span>{text}</span>
    </div>
  );
}

/** A terminal window showing a fix being applied. Lines type out when it scrolls into view. */
export function FixTerminal({ content }: FixTerminalProps): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const inView = useInView(ref, { threshold: 0.5 });
  const [phase, setPhase] = useState<Phase>("final");
  const [current, setCurrent] = useState(0);

  const { lines } = content;
  const line = lines[current];
  const typing = phase === "running" && line?.typed === true;
  const typed = useTypewriter(typing ? line.text : "", {
    speedMs: current === 0 ? FIRST_LINE_SPEED_MS : LINE_SPEED_MS,
    active: typing,
  });

  // Arm once motion is allowed and the terminal has not been seen yet.
  useEffect(() => {
    if (reduced) {
      setPhase("final");
    } else if (!inView) {
      setPhase("armed");
    }
  }, [reduced, inView]);

  // Start shortly after it scrolls into view.
  useEffect(() => {
    if (phase !== "armed" || !inView) return undefined;
    const timer = window.setTimeout(() => {
      setCurrent(0);
      setPhase("running");
    }, START_DELAY_MS);
    return () => {
      window.clearTimeout(timer);
    };
  }, [phase, inView]);

  // Move to the next line when the current one has finished.
  useEffect(() => {
    if (phase !== "running" || line === undefined) return undefined;
    if (line.typed && !typed.done) return undefined;
    const wait = line.typed ? (current === 0 ? AFTER_FIRST_LINE_MS : 0) : INSTANT_LINE_MS;
    const timer = window.setTimeout(() => {
      setCurrent((index) => index + 1);
    }, wait);
    return () => {
      window.clearTimeout(timer);
    };
  }, [phase, line, current, typed.done]);

  return (
    <div ref={ref} className={styles.term} role="img" aria-label={content.label}>
      <div className={styles.bar} aria-hidden="true">
        <i className={styles.red} />
        <i className={styles.yellow} />
        <i className={styles.green} />
        <span>{content.windowTitle}</span>
      </div>
      <div className={styles.body} aria-hidden="true">
        {lines.map((item, index) => {
          const isCurrent = phase === "running" && index === current;
          const hidden = phase === "armed" || (phase === "running" && index > current);
          const text = isCurrent && item.typed ? typed.output : item.text;
          return <Line key={item.text} line={item} text={text} hidden={hidden} />;
        })}
      </div>
    </div>
  );
}
