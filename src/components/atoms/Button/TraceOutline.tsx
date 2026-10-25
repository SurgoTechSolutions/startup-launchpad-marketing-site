"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface TraceOutlineProps {
  readonly className: string | undefined;
}

/**
 * The outline a line of light runs round on a navy-band button. It sets data-in-view="true" once the
 * button has scrolled into view, so the line runs and the glow swells once without a hover.
 */
export function TraceOutline({ className }: TraceOutlineProps): ReactNode {
  const ref = useRef<SVGSVGElement>(null);
  const reduced = usePrefersReducedMotion();
  const inView = useInView(ref, { threshold: 1 });

  return (
    <svg ref={ref} className={className} aria-hidden="true" focusable="false" data-in-view={reduced ? undefined : inView}>
      <rect width="100%" height="100%" rx="9" pathLength="100" />
    </svg>
  );
}
