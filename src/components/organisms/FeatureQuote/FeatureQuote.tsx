import type { ReactNode } from "react";
import { Avatar } from "@/components/atoms/Avatar";
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
      <figure className={styles.feature}>
        <Avatar src={content.photo.src} alt={content.photo.alt} size="feature" />
        <div>
          <span className={styles.mark} aria-hidden="true">
            &quot;
          </span>
          <blockquote className={styles.text}>{content.quote.text}</blockquote>
          <PersonCredit
            person={content.quote.person}
            note={content.bio}
            showAvatar={false}
            className={styles.credit}
          />
        </div>
      </figure>
    </section>
  );
}
