import type { ReactNode } from "react";
import styles from "./CritBadge.module.css";

export interface CritBadgeProps {
  readonly children: ReactNode;
}

/** Red pill sized relative to the heading it sits in. */
export function CritBadge({ children }: CritBadgeProps): ReactNode {
  return <span className={styles.badge}>{children}</span>;
}
