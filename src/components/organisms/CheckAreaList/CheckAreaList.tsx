import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ValueCard } from "@/components/molecules/ValueCard";
import type { CheckArea, WhatWeCheckContent } from "@/types";
import styles from "./CheckAreaList.module.css";

export interface CheckAreaListProps {
  readonly content: WhatWeCheckContent;
}

function Area({ area }: { readonly area: CheckArea }): ReactNode {
  return (
    <section id={area.id} className={styles.area} aria-labelledby={`${area.id}-title`}>
      <div className={styles.lead}>
        <SectionTitle className={styles.title}>
          <span id={`${area.id}-title`}>{area.title}</span>
        </SectionTitle>
        <p className={styles.intro}>{area.intro}</p>
        <div className={styles.example}>
          <span className={styles.exampleLabel}>{area.exampleLabel}</span>
          <p>{area.example}</p>
        </div>
      </div>

      <div className={styles.detail}>
        {area.common !== undefined && (
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>{area.common.title}</h3>
            <div className={styles.commonGrid}>
              {area.common.items.map((item) => (
                <ValueCard key={item.title} title={item.title} body={item.body} />
              ))}
            </div>
          </div>
        )}
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>{area.checksTitle}</h3>
          <dl className={styles.checks}>
            {area.checks.map((check) => (
              <div key={check.title} className={styles.check}>
                <dt>{check.title}</dt>
                <dd>{check.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        {area.aiReview !== undefined && (
          <div className={styles.aiReview}>
            <h3 className={styles.blockTitle}>{area.aiReview.title}</h3>
            <p>{area.aiReview.body}</p>
          </div>
        )}
      </div>
    </section>
  );
}

/** Jump links to each area, then every area in full. All of it renders without JavaScript. */
export function CheckAreaList({ content }: CheckAreaListProps): ReactNode {
  return (
    <>
      <nav className={styles.jump} aria-label={content.jumpLabel}>
        {content.areas.map((area) => (
          <a key={area.id} href={`#${area.id}`} className={styles.chip}>
            {area.title}
          </a>
        ))}
      </nav>
      {content.areas.map((area) => (
        <Area key={area.id} area={area} />
      ))}
    </>
  );
}
