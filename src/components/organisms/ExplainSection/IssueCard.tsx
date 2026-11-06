import type { ReactNode } from "react";
import { InView } from "@/components/atoms/InView";
import { cx } from "@/lib/cx";
import type { ExplainContent } from "@/types";
import styles from "./ExplainSection.module.css";
import { Words } from "./Words";

export interface IssueCardProps {
  readonly issue: ExplainContent["issue"];
}

/** One issue explained, which fills itself in like a report being written as it scrolls into view. */
export function IssueCard({ issue }: IssueCardProps): ReactNode {
  return (
    <InView className={cx(styles.card, styles.explained)} threshold={0.4}>
      <div className={styles.issue}>
        <div className={styles.tags}>
          <span className={styles.severity}>{issue.severity}</span>
          <span className={styles.category}>{issue.category}</span>
        </div>
        <h3>{issue.title}</h3>
        <p>
          <Words text={issue.body} />
        </p>
        <div className={styles.location}>
          <code>{issue.location}</code>
          <span>{issue.locationNote}</span>
        </div>
      </div>
    </InView>
  );
}
