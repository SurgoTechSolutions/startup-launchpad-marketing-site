import type { ReactNode } from "react";
import type { LegalClause as LegalClauseContent } from "@/types";
import { RichText } from "../RichText";
import styles from "./LegalClause.module.css";

export interface LegalClauseProps {
  readonly clause: LegalClauseContent;
}

/** One numbered clause of a legal document, with its list if it has one. */
export function LegalClause({ clause }: LegalClauseProps): ReactNode {
  return (
    <div className={styles.clause} id={`clause-${clause.number}`}>
      <span className={styles.number}>{clause.number}</span>
      <div className={styles.body}>
        <p>
          <RichText content={clause.text} />
        </p>
        {clause.list !== undefined && (
          <ol className={styles.list}>
            {clause.list.map((item, index) => (
              // Items are static content, so their position is a stable key.
              <li key={index}>
                <RichText content={item} />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
