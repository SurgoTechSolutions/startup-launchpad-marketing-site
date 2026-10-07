import type { ReactNode } from "react";
import { LevelMark } from "@/components/atoms/LevelMark";
import { cx } from "@/lib/cx";
import type { VerifiedLevel } from "@/types";
import styles from "./LevelRow.module.css";

export interface LevelRowProps {
  readonly level: VerifiedLevel;
  readonly levelLabel: string;
  readonly publicLabel: string;
  readonly privateLabel: string;
}

/** One level: its metal mark, name and rules, and whether it earns a public badge. */
export function LevelRow({ level, levelLabel, publicLabel, privateLabel }: LevelRowProps): ReactNode {
  const isPublic = level.publicBadge;

  return (
    <article className={styles.row}>
      <div className={styles.mark}>
        <LevelMark metal={level.metal} height={64} />
      </div>
      <div className={styles.body}>
        <span className={styles.number}>
          {levelLabel} {level.number}
        </span>
        <h3 className={styles.name}>{level.name}</h3>
        <p className={styles.tagline}>{level.tagline}</p>
        <ul className={styles.rules}>
          {level.rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
      <div className={styles.meta}>
        <span className={cx(styles.tag, isPublic ? styles.public : styles.private)}>
          {isPublic ? publicLabel : privateLabel}
        </span>
      </div>
    </article>
  );
}
