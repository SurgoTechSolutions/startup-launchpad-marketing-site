import type { ReactNode } from "react";
import { LevelMark } from "@/components/atoms/LevelMark";
import { cx } from "@/lib/cx";
import type { VerifiedBadgeExample } from "@/types";
import styles from "./VerifiedBadge.module.css";

export interface VerifiedBadgeProps {
  readonly badge: VerifiedBadgeExample;
  readonly tone?: "light" | "dark";
  readonly lapsed?: boolean;
}

/** The small embeddable badge: mark, programme name, level and date. */
export function VerifiedBadge({ badge, tone = "light", lapsed = false }: VerifiedBadgeProps): ReactNode {
  return (
    <span className={cx(styles.badge, styles[tone], lapsed && styles.lapsed)}>
      <LevelMark metal={badge.metal} height={20} lapsed={lapsed} />
      <span>
        <b className={styles.label}>{badge.label}</b>
        <span className={styles.sep} aria-hidden="true">
          {" · "}
        </span>
        <span className={styles.level}>{badge.level}</span>
        <span className={styles.sep} aria-hidden="true">
          {" · "}
        </span>
        <span className={styles.date}>{badge.date}</span>
      </span>
    </span>
  );
}
