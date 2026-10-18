import type { ReactNode } from "react";
import type { DashArea } from "@/types";

/** Icon paths copied from the mock-up. Line icons, drawn in the current text colour. */
const PATHS: Record<DashArea, ReactNode> = {
  security: <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />,
  accessibility: (
    <>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  reliability: <path d="M2 12h4l2.5-6 4 12 2.5-6h7" />,
  cost: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.5 0-2.6.8-2.6 2s1 1.7 2.6 2 2.7.8 2.7 2-1.2 2-2.7 2c-1.2 0-2.2-.5-2.7-1.3M12 6.5v1.5M12 16v1.5" />
    </>
  ),
  housekeeping: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8.5 10.5l1.5 1.5 3-3M8.5 15.5h7" />
    </>
  ),
};

export interface AreaIconProps {
  readonly area: DashArea;
  readonly className?: string | undefined;
}

/** The icon for one area of the scan, as on the dashboard. Decorative, so hidden from screen readers. */
export function AreaIcon({ area, className }: AreaIconProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[area]}
    </svg>
  );
}
