import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { cx } from "@/lib/cx";
import type { Plan } from "@/types";
import styles from "./PlanCard.module.css";

export interface PlanCardProps {
  readonly plan: Plan;
  /** Where the plan's button goes, if it has one. */
  readonly ctaHref: string;
}

export function PlanCard({ plan, ctaHref }: PlanCardProps): ReactNode {
  return (
    <div className={cx(styles.plan, plan.featured === true && styles.featured)}>
      <h3>{plan.title}</h3>
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
