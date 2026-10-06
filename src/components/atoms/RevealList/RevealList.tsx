"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface RevealListProps {
  readonly children: ReactNode;
  readonly className?: string | undefined;
}

/**
 * An ordered list whose items fade up one by one as they scroll into view.
 * It only sets data attributes: data-reveal="armed" on the list once motion is allowed,
 * and data-in on each item as it appears. The item's own styles do the animating, so
 * without JavaScript or with reduced motion every item simply shows.
 */
export function RevealList({ children, className }: RevealListProps): ReactNode {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const list = ref.current;
    if (list === null || reduced || !("IntersectionObserver" in window)) return undefined;

    list.dataset.reveal = "armed";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (entry.target instanceof HTMLElement) entry.target.dataset.in = "";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );
    for (const item of Array.from(list.children)) observer.observe(item);

    return () => {
      observer.disconnect();
      delete list.dataset.reveal;
    };
  }, [reduced]);

  return (
    <ol ref={ref} className={className}>
      {children}
    </ol>
  );
}
