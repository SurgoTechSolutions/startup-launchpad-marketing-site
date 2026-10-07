import type { ReactNode } from "react";
import { Lede } from "@/components/atoms/Lede";
import { LevelMark } from "@/components/atoms/LevelMark";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { VerifiedBadge } from "@/components/molecules/VerifiedBadge";
import type { VerifiedContent } from "@/types";
import styles from "./BadgeShowcase.module.css";

export interface BadgeShowcaseProps {
  readonly content: VerifiedContent["badge"];
}

/** Example badges in light, dark and lapsed form, and the public page they link to. */
export function BadgeShowcase({ content }: BadgeShowcaseProps): ReactNode {
  const { page } = content;

  return (
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
        <Lede>{content.lede}</Lede>
      </SectionHead>
      <div className={styles.grid}>
        <div className={styles.badges}>
          <div className={styles.surfaceLight}>
            <VerifiedBadge badge={content.example} />
          </div>
          <div className={styles.surfaceDark}>
            <VerifiedBadge badge={content.example} tone="dark" />
          </div>
          <div className={styles.surfaceLight}>
            <VerifiedBadge badge={content.lapsed} lapsed />
            <p className={styles.note}>{content.lapsedNote}</p>
          </div>
        </div>
        <figure className={styles.page}>
          <figcaption className={styles.caption}>{page.caption}</figcaption>
          <div className={styles.pageCard}>
            <LevelMark metal={content.example.metal} height={96} />
            <span className={styles.programme}>{content.example.label}</span>
            <h3 className={styles.pageHeading}>{page.heading}</h3>
            <dl className={styles.rows}>
              {page.rows.map((row) => (
                <div key={row.label} className={styles.rowItem}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.scope}>{page.scope}</p>
          </div>
        </figure>
      </div>
    </section>
  );
}
