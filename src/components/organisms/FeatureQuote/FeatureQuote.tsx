import type { ReactNode } from "react";
import { Avatar } from "@/components/atoms/Avatar";
import { Button } from "@/components/atoms/Button";
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
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
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
            role={content.bio}
            showAvatar={false}
            className={styles.credit}
          />
          <div className={styles.cta}>
            <p>{content.ctaText}</p>
            <Button href={signupUrl}>{content.ctaLabel}</Button>
          </div>
        </div>
      </figure>
    </section>
  );
}
