import type { ReactNode } from "react";
import { Lede } from "@/components/atoms/Lede";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { cx } from "@/lib/cx";
import type { WhatWeCheckContent } from "@/types";
import styles from "./ScoringGuide.module.css";

export interface ScoringGuideProps {
  readonly content: WhatWeCheckContent["scoring"];
}

/** The five severities, what each means, and what never counts towards a score. */
export function ScoringGuide({ content }: ScoringGuideProps): ReactNode {
  return (
    <section className={styles.band}>
      <SectionHead>
        <HeadingFill>
          <SectionTitle size="find">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
        <Lede>{content.lede}</Lede>
      </SectionHead>
      <dl className={styles.levels}>
        {content.levels.map((level) => (
          <div key={level.severity} className={cx(styles.level, styles[`${level.severity}Bar`])}>
            <dt>
              <span className={cx(styles.dot, styles[level.severity])} aria-hidden="true" />
              {level.name}
            </dt>
            <dd>{level.body}</dd>
          </div>
        ))}
      </dl>
      {content.notes !== undefined && (
        <ul className={styles.notes}>
          {content.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
