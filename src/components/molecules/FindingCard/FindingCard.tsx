import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { Finding } from "@/types";
import styles from "./FindingCard.module.css";

export interface FindingCardProps {
  readonly finding: Finding;
  readonly className?: string;
}

export function FindingCard({ finding, className }: FindingCardProps): ReactNode {
  return (
    <article className={cx(styles.find, className)}>
      <div className={styles.top}>
        <span className={styles.tag}>{finding.category}</span>
        <span className={styles.source}>{finding.source}</span>
      </div>
      <h3 className={styles.title}>{finding.title}</h3>
      <p className={styles.body}>{finding.body}</p>
    </article>
  );
}
