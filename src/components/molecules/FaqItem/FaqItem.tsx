import type { ReactNode } from "react";
import type { Faq } from "@/types";
import styles from "./FaqItem.module.css";

export interface FaqItemProps {
  readonly faq: Faq;
}

/** Native details and summary, so it opens with the keyboard and works without JavaScript. */
export function FaqItem({ faq }: FaqItemProps): ReactNode {
  return (
    <details className={styles.item}>
      <summary className={styles.question}>{faq.question}</summary>
      <p className={styles.answer}>{faq.answer}</p>
    </details>
  );
}
