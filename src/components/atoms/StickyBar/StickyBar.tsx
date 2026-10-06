"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useScrolled } from "@/hooks/useScrolled";

const SCROLL_THRESHOLD_PX = 8;

export interface StickyBarProps {
  readonly children: ReactNode;
  readonly className?: string | undefined;
}

/**
 * A header that pins to the top of the window once hydrated, and reports scrolling through
 * data attributes so its own styles can shrink it:
 * data-pinned while it is fixed to the top, data-scrolled once the page has scrolled.
 *
 * A slot keeps the header's full, unscrolled height in the page flow, so shrinking the bar
 * never moves the content underneath. Before hydration the header simply sits in the flow.
 */
export function StickyBar({ children, className }: StickyBarProps): ReactNode {
  const barRef = useRef<HTMLElement>(null);
  const scrolled = useScrolled(SCROLL_THRESHOLD_PX);
  const [slotHeight, setSlotHeight] = useState<number | null>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (bar === null) return undefined;
    // Only the full-size bar sets the slot height; the compact one never shrinks it.
    const measure = (): void => {
      if (bar.dataset.scrolled === undefined) setSlotHeight(bar.offsetHeight);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={slotHeight === null ? undefined : { height: slotHeight }}>
      <header
        ref={barRef}
        className={className}
        data-pinned={slotHeight === null ? undefined : ""}
        data-scrolled={scrolled ? "" : undefined}
      >
        {children}
      </header>
    </div>
  );
}
