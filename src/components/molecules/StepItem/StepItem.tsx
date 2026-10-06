import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { Step } from "@/types";
import styles from "./StepItem.module.css";

export interface StepItemProps {
  readonly step: Step;
  readonly className?: string;
}

/** One numbered step. The parent list resets the counter and draws nothing else. */
export function StepItem({ step, className }: StepItemProps): ReactNode {
  return (
    <li className={cx(styles.step, className)}>
      <b className={styles.title}>{step.title}</b>
      {step.body}
    </li>
  );
}
