"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./CopyPromptButton.module.css";

export interface CopyPromptButtonLabels {
  readonly idle: string;
  readonly copied: string;
  /** Shown when the clipboard is blocked and the text is selected instead. */
  readonly selected: string;
}

export interface CopyPromptButtonProps {
  readonly text: string;
  /** Id of the element holding the text, selected as a fallback when the clipboard is blocked. */
  readonly targetId: string;
  readonly labels: CopyPromptButtonLabels;
}

type CopyState = "idle" | "copied" | "selected";

const RESET_AFTER_MS = { idle: 0, copied: 1800, selected: 2500 } as const satisfies Record<CopyState, number>;

function selectTarget(targetId: string): void {
  const target = document.getElementById(targetId);
  const selection = window.getSelection();
  if (target === null || selection === null) return;
  const range = document.createRange();
  range.selectNodeContents(target);
  selection.removeAllRanges();
  selection.addRange(range);
}

export function CopyPromptButton({ text, targetId, labels }: CopyPromptButtonProps): ReactNode {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return undefined;
    const timer = window.setTimeout(() => {
      setState("idle");
    }, RESET_AFTER_MS[state]);
    return () => {
      window.clearTimeout(timer);
    };
  }, [state]);

  const handleClick = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      selectTarget(targetId);
      setState("selected");
    }
  };

  return (
    <button
      type="button"
      className={styles.button}
      aria-controls={targetId}
      onClick={() => void handleClick()}
    >
      <span aria-live="polite">{labels[state]}</span>
    </button>
  );
}
