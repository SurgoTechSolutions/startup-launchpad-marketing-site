import { useEffect, useState } from "react";

/** True once the page has scrolled more than `threshold` pixels. False on the server. */
export function useScrolled(threshold: number): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = (): void => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, [threshold]);

  return scrolled;
}
