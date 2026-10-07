import type { ReactNode } from "react";
import { Lede } from "@/components/atoms/Lede";
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
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
        <Lede>{content.lede}</Lede>
      </SectionHead>
      <dl className={styles.levels}>
        {content.levels.map((level) => (
          <div key={level.severity} className={styles.level}>
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
