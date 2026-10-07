import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { RingCount } from "@/types";
import styles from "./RingMark.module.css";

/** Ring radii in a 48-unit box, innermost first. Rings fill from the inside out. */
const RADII = [8, 15, 22] as const;

export interface RingMarkProps {
  readonly rings: RingCount;
  /** Rendered size in pixels. */
  readonly size?: number;
  /** Grey everything out, for a level that has been lost. */
  readonly lapsed?: boolean;
  /** Use light empty rings, for dark backgrounds. */
  readonly onDark?: boolean;
  /** Accessible name. Leave out when the level is written next to the mark. */
  readonly label?: string;
}

/** The Launchpad Verified mark: layers of protection around a centre, filled per level. */
export function RingMark({ rings, size = 48, lapsed = false, onDark = false, label }: RingMarkProps): ReactNode {
  return (
    <svg
      className={cx(styles.mark, lapsed && styles.lapsed, onDark && styles.onDark)}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      {...(label === undefined ? { "aria-hidden": true } : { role: "img", "aria-label": label })}
    >
      {RADII.map((radius, index) => (
        <circle
          key={radius}
          className={cx(styles.ring, index < rings && styles.filled)}
          cx="24"
          cy="24"
          r={radius}
        />
      ))}
      <circle className={styles.dot} cx="24" cy="24" r="3.5" />
    </svg>
  );
}
