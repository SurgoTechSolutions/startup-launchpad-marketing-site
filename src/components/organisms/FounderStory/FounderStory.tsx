import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import type { FounderStoryContent } from "@/types";
import styles from "./FounderStory.module.css";

export interface FounderStoryProps {
  readonly content: FounderStoryContent;
  readonly signupUrl: string;
}

export function FounderStory({ content, signupUrl }: FounderStoryProps): ReactNode {
  return (
    <section className={styles.spot}>
      <div className={styles.copy}>
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <SectionTitle size="spot">
          <RichText content={content.title} />
        </SectionTitle>
        <Lede>{content.lede}</Lede>
        <Button href={signupUrl}>{content.ctaLabel}</Button>
      </div>
      <div className={styles.visual}>
        {/* Decorative: the heading already says the same thing. */}
        <div className={styles.badge} aria-hidden="true">
          <span className={styles.before}>{content.before}</span>
          <svg viewBox="0 0 24 24">
            <path d="M4 12h15M13 6l6 6-6 6" />
          </svg>
          <b className={styles.after}>{content.after}</b>
        </div>
        <QuoteCard variant="spotlight" text={content.quote.text} person={content.quote.person} />
      </div>
    </section>
  );
}
