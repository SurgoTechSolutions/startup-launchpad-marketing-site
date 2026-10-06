import { useEffect, useRef } from "react";

/** Calls the callback every `delay` ms. Pass null to pause. Always calls the latest callback. */
export function useInterval(callback: () => void, delay: number | null): void {
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
  }, [delay]);
}
