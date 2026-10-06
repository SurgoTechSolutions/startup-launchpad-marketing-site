import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./StatCard.module.css";

export interface StatCardProps {
  /** The figure. A plain string, or a count-up component once interactions are wired. */
  readonly value: ReactNode;
  readonly label: string;
  /** Hot stats draw the figure in red. */
  readonly hot?: boolean;
  readonly className?: string | undefined;
}

export function StatCard({ value, label, hot = false, className }: StatCardProps): ReactNode {
  return (
    <div className={cx(styles.stat, hot && styles.hot, className)}>
      <span className={styles.value}>{value}</span>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
