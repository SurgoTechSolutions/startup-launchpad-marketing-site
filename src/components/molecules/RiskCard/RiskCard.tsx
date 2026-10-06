import type { ReactNode } from "react";
import { PullQuote } from "@/components/atoms/PullQuote";
import type { Risk } from "@/types";
import { RichText } from "../RichText";
import styles from "./RiskCard.module.css";

export interface RiskCardProps {
  readonly risk: Risk;
}

/** One risk: what it is on the left, real findings that show it on the right. */
export function RiskCard({ risk }: RiskCardProps): ReactNode {
  return (
    <article className={styles.risk}>
      <div className={styles.copy}>
        <span className={styles.number} aria-hidden="true">
          {risk.number}
        </span>
        <h3 className={styles.title}>{risk.title}</h3>
        <p className={styles.body}>
          <RichText content={risk.body} />
        </p>
      </div>
      <div className={styles.proof}>
        <span className={styles.label}>{risk.proofLabel}</span>
        <ul className={styles.list}>
          {risk.proofs.map((proof) => (
            <li key={proof}>{proof}</li>
          ))}
        </ul>
        {risk.quote !== undefined && <PullQuote parts={risk.quote.parts} attribution={risk.quote.attribution} />}
      </div>
    </article>
  );
}
