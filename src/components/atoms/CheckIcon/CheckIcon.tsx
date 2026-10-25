import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { CheckKind } from "@/types";
import styles from "./CheckIcon.module.css";

/**
 * Line icons in the same style as the area icons, drawn in the current text colour. The parts
 * that move are their own elements, so each icon can act out its check (see CheckIcon.module.css).
 */
const PATHS: Record<CheckKind, ReactNode> = {
  secrets: (
    <g className={styles.key}>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.8 12.2L20 3M16.5 6.5l2.5 2.5M14 9l2 2" />
    </g>
  ),
  dependencies: (
    <g className={styles.box}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </g>
  ),
  code: (
    <>
      <path className={styles.left} d="M8.5 7L3.5 12l5 5" />
      <path className={styles.right} d="M15.5 7l5 5-5 5" />
      <path className={styles.draw} d="M13.5 4.5l-3 15" pathLength={1} />
    </>
  ),
  https: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2.5" />
      <path className={styles.shackle} d="M8 10.5V7.5a4 4 0 018 0v3" />
      <path d="M12 14.5v2.5" />
    </>
  ),
  headers: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
      <path className={styles.draw} d="M9 12h6" pathLength={1} />
    </>
  ),
  legal: (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
      <path d="M14 3v5h5" />
      <path className={styles.draw} d="M8.5 13h7" pathLength={1} />
      <path className={cx(styles.draw, styles.later)} d="M8.5 17h5" pathLength={1} />
    </>
  ),
  accessibility: (
    <g className={styles.eye}>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </g>
  ),
  speed: (
    <>
      <path d="M4.2 17a9 9 0 1115.6 0" />
      <path className={styles.needle} d="M12 13l4-4.5" />
      <circle cx="12" cy="13" r="1.2" />
    </>
  ),
  search: (
    <g className={styles.glass}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </g>
  ),
};

export interface CheckIconProps {
  readonly kind: CheckKind;
  readonly className?: string | undefined;
}

/**
 * The icon for one thing a scan checks. Decorative, so hidden from screen readers. It plays its
 * move once whenever an ancestor gets a fresh data-play attribute.
 */
export function CheckIcon({ kind, className }: CheckIconProps): ReactNode {
  return (
    <svg
      className={cx(styles.root, className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[kind]}
    </svg>
  );
}
