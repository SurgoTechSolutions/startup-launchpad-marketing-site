import type { ReactNode } from "react";
import { AreaIcon } from "@/components/atoms/AreaIcon";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { JumpNav } from "@/components/molecules/JumpNav";
import { ValueCard } from "@/components/molecules/ValueCard";
import { cx } from "@/lib/cx";
import type { CheckArea, WhatWeCheckContent } from "@/types";
import styles from "./CheckAreaList.module.css";

export interface CheckAreaListProps {
  readonly content: WhatWeCheckContent;
}

function Area({
  area,
  grey,
  first,
}: {
  readonly area: CheckArea;
  readonly grey: boolean;
  readonly first: boolean;
}): ReactNode {
  return (
    <section
      id={area.id}
      className={cx(styles.area, grey ? styles.grey : styles.white, first && styles.first)}
      aria-labelledby={`${area.id}-title`}
    >
      <div className={styles.lead}>
        <SectionTitle className={styles.title}>
          <AreaIcon area={area.icon} className={styles.icon} />
          <span id={`${area.id}-title`}>{area.title}</span>
        </SectionTitle>
        <p className={styles.intro}>{area.intro}</p>
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
      </div>
    </section>
  );
}

/**
 * Sticky jump links to each area, then every area in full on alternating white and grey bands.
 * All of it renders without JavaScript.
 */
export function CheckAreaList({ content }: CheckAreaListProps): ReactNode {
  // The links only stick while this wrapper is on screen, so they scroll away after the last area.
  return (
    <div>
      <JumpNav
        label={content.jumpLabel}
        links={content.areas.map((area) => ({ id: area.id, label: area.title }))}
      />
      {content.areas.map((area, index) => (
        <Area key={area.id} area={area} grey={index % 2 === 1} first={index === 0} />
      ))}
    </div>
  );
}
