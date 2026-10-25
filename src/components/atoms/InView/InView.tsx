"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface InViewProps {
  readonly children: ReactNode;
  readonly className?: string | undefined;
  /** How much of the box must be on screen before it counts as seen. */
  readonly threshold?: number;
}

/**
 * A plain box that sets data-in-view="true" once it has scrolled into view, and keeps it. The
 * styling of whatever it wraps decides what happens; this only flips the switch. The attribute
 * only appears once motion is allowed after hydration, so without JavaScript or with reduced
 * motion the contents simply show in their final state.
 */
export function InView({ children, className, threshold = 0.5 }: InViewProps): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const inView = useInView(ref, { threshold });

  return (
    <div ref={ref} className={className} data-in-view={reduced ? undefined : inView}>
      {children}
    </div>
  );
}
