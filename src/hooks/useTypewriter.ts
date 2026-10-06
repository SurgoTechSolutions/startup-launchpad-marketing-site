import { useState } from "react";
import { useInterval } from "./useInterval";

export interface TypewriterOptions {
  /** Milliseconds per character. */
  readonly speedMs: number;
  readonly active: boolean;
}

export interface TypewriterState {
  readonly output: string;
  readonly done: boolean;
}

/** Reveals `text` one character at a time while active. Restarts when the text changes. */
export function useTypewriter(text: string, { speedMs, active }: TypewriterOptions): TypewriterState {
  const [progress, setProgress] = useState({ text, count: 0 });
  const count = progress.text === text ? progress.count : 0;
  const done = count >= text.length;

  useInterval(
    () => {
      setProgress((previous) => ({
        text,
        count: (previous.text === text ? previous.count : 0) + 1,
      }));
    },
    active && !done ? speedMs : null,
  );

  return { output: text.slice(0, count), done };
}
