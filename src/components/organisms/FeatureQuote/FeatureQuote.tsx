import Image from "next/image";
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

/**
 * The heading centred on white, then a two-tone band: the person's photo filling the left half
 * and their quote, name and the button on slate on the right.
 */
export function FeatureQuote({ content, signupUrl }: FeatureQuoteProps): ReactNode {
  return (
    <section className={styles.section}>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
        {content.lede !== undefined && <Lede>{content.lede}</Lede>}
      </SectionHead>
      <div className={styles.split}>
        <div className={styles.photo}>
          <Image
            src={content.photo.src}
            alt={content.photo.alt}
            fill
            placeholder="blur"
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
        <div className={styles.quoteSide}>
          <figure className={styles.feature}>
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
          </figure>
          <div className={styles.cta}>
            <Button href={signupUrl}>{content.ctaLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
