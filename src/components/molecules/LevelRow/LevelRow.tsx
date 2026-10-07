import type { ReactNode } from "react";
import { LevelMark } from "@/components/atoms/LevelMark";
import type { VerifiedLevel } from "@/types";
import styles from "./LevelRow.module.css";

export interface LevelRowProps {
  readonly level: VerifiedLevel;
  readonly levelLabel: string;
}

/** One level: its metal mark, name, tagline and rules. */
export function LevelRow({ level, levelLabel }: LevelRowProps): ReactNode {
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
    </article>
  );
}
