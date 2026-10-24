import { useEffect, useRef } from "react";

/**
 * Calls the callback every `delay` ms. Pass null to pause. Always calls the latest callback.
 * Whenever `resetKey` changes, the wait starts again from zero.
 */
export function useInterval(
  callback: () => void,
  delay: number | null,
  resetKey?: unknown,
): void {
  const saved = useRef(callback);

  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return undefined;
    const id = window.setInterval(() => {
      saved.current();
    }, delay);
    return () => {
      window.clearInterval(id);
    };
  }, [delay, resetKey]);
}
