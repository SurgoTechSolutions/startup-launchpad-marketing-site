import { useEffect, useState, type RefObject } from "react";

export interface InViewOptions {
  readonly threshold?: number;
  readonly rootMargin?: string;
}

/** True once the element has scrolled into view. It stays true after that. */
export function useInView(ref: RefObject<Element | null>, { threshold = 0, rootMargin = "0px" }: InViewOptions = {}): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element === null || inView) return undefined;

    // Without IntersectionObserver, treat everything as visible.
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, inView]);

  return inView;
}
