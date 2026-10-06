import type { ReactNode } from "react";
import styles from "./ValueCard.module.css";

export interface ValueCardProps {
  readonly title: string;
  readonly body: string;
}

/** A short principle: a title and one line underneath. */
export function ValueCard({ title, body }: ValueCardProps): ReactNode {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
