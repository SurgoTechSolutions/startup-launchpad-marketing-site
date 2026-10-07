import type { ReactNode } from "react";
import { RingMark } from "@/components/atoms/RingMark";
import { cx } from "@/lib/cx";
import type { VerifiedLevel } from "@/types";
import styles from "./LevelRow.module.css";

export interface LevelRowProps {
  readonly level: VerifiedLevel;
  readonly levelLabel: string;
  readonly timeLabel: string;
  readonly publicLabel: string;
  readonly privateLabel: string;
}

/** One level: its mark, name and rules, how long it takes, and whether it earns a public badge. */
export function LevelRow({ level, levelLabel, timeLabel, publicLabel, privateLabel }: LevelRowProps): ReactNode {
  const isPublic = level.rings !== null;

  return (
    <article className={styles.row}>
      <div className={styles.mark}>
        {level.rings === null ? (
          <span className={styles.step} aria-hidden="true">
            {level.number}
          </span>
        ) : (
          <RingMark rings={level.rings} size={56} />
        )}
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
        <span className={styles.timeLabel}>{timeLabel}</span>
        <span className={styles.time}>{level.time}</span>
        <span className={cx(styles.tag, isPublic ? styles.public : styles.private)}>
          {isPublic ? publicLabel : privateLabel}
        </span>
      </div>
    </article>
  );
}
