import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { cx } from "@/lib/cx";
import type { Plan } from "@/types";
import styles from "./PlanCard.module.css";

export interface PlanCardProps {
  readonly plan: Plan;
  /** Where the plan's button goes, if it has one. */
  readonly ctaHref: string;
  /** One level below the section heading: h3 under an h2, h2 under the page h1. */
  readonly headingLevel?: "h2" | "h3";
}

export function PlanCard({ plan, ctaHref, headingLevel: Heading = "h3" }: PlanCardProps): ReactNode {
  return (
    <div className={cx(styles.plan, plan.featured === true && styles.featured)}>
      <Heading className={styles.title}>{plan.title}</Heading>
      <div className={styles.amount}>
        {plan.price.amount}
        {plan.price.period !== undefined && (
          <>
            {" "}
            <small className={styles.period}>{plan.price.period}</small>
          </>
        )}
      </div>
      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      {plan.ctaLabel !== undefined && <Button href={ctaHref}>{plan.ctaLabel}</Button>}
      {plan.note !== undefined && <p className={styles.note}>{plan.note}</p>}
    </div>
  );
}
