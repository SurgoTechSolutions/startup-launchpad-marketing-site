import type { ReactNode } from "react";
import styles from "./PullQuote.module.css";

export interface PullQuoteProps {
  /** Separate remarks, shown in quote marks and joined with an ellipsis. */
  readonly parts: readonly string[];
  readonly attribution: string;
}

/** A quote with an orange rule and a short line saying who said it. */
export function PullQuote({ parts, attribution }: PullQuoteProps): ReactNode {
  return (
    <figure className={styles.quote}>
      <blockquote className={styles.text}>{parts.map((part) => `"${part}"`).join(" … ")}</blockquote>
      <figcaption className={styles.attribution}>{attribution}</figcaption>
    </figure>
  );
}
