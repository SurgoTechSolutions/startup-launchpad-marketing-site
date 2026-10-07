import type { ReactNode } from "react";
import type { RuleGroup } from "@/types";
import styles from "./RuleCard.module.css";

export interface RuleCardProps {
  readonly group: RuleGroup;
}

export function RuleCard({ group }: RuleCardProps): ReactNode {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{group.title}</h3>
      <ul className={styles.list}>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
