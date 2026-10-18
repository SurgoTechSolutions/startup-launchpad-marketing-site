import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PersonCredit } from "@/components/molecules/PersonCredit";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { FeatureQuoteContent } from "@/types";
import styles from "./FeatureQuote.module.css";

export interface FeatureQuoteProps {
  readonly content: FeatureQuoteContent;
  readonly signupUrl: string;
}

export function FeatureQuote({ content, signupUrl }: FeatureQuoteProps): ReactNode {
  return (
    <section className={styles.band}>
      <SectionHead align="start">
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
        {content.lede !== undefined && <Lede>{content.lede}</Lede>}
        <div className={styles.cta}>
          <Button href={signupUrl}>{content.ctaLabel}</Button>
        </div>
      </SectionHead>
      <div className={styles.quoteSide}>
        <figure className={styles.feature}>
          <span className={styles.mark} aria-hidden="true">
            &quot;
          </span>
          <blockquote className={styles.text}>{content.quote.text}</blockquote>
          <PersonCredit person={content.quote.person} note={content.bio} className={styles.credit} />
        </figure>
      </div>
    </section>
  );
}
