import { useEffect, useState } from "react";

export interface CountUpOptions {
  readonly to: number;
  readonly durationMs: number;
  readonly delayMs?: number;
  /** When false the final value shows straight away, e.g. for reduced motion. */
  readonly enabled: boolean;
  /** Starts counting when this becomes true, typically when scrolled into view. */
  readonly start: boolean;
}

/** Eases a number from 0 to `to` with an ease-out curve. Returns the value to show. */
export function useCountUp({ to, durationMs, delayMs = 0, enabled, start }: CountUpOptions): number {
  // null means "show the final value", which is also what the server renders.
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setValue(null);
      return undefined;
    }
    if (!start) {
      setValue(0);
      return undefined;
    }

    let frame = 0;
    let startedAt: number | null = null;
    const step = (now: number): void => {
      startedAt ??= now;
      const progress = Math.min((now - startedAt) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    const timer = window.setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [enabled, start, to, durationMs, delayMs]);

  return value ?? to;
}
