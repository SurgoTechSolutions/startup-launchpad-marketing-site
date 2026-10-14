import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import type { FinalCtaContent } from "@/types";
import styles from "./FinalCta.module.css";

export interface FinalCtaProps {
  readonly content: FinalCtaContent;
  readonly signupUrl: string;
  readonly id?: string;
  /**
   * "split" puts the quote beside the copy (main page). "centered" stacks everything in the
   * middle with the quote under the button. "banner" is a full-width white band with the words
   * on the left and the button on the right, and no quote. Defaults to split when there is a quote.
   */
  readonly layout?: "split" | "centered" | "banner";
}

/** The closing call to action, with an optional quote. */
export function FinalCta({ content, signupUrl, id, layout }: FinalCtaProps): ReactNode {
  const { quote } = content;

  if (layout === "banner") {
    return (
      <section id={id} className={styles.banner}>
        <div className={styles.bannerText}>
          <SectionTitle size="base">
            <RichText content={content.title} />
          </SectionTitle>
          {content.lede !== undefined && <Lede>{content.lede}</Lede>}
        </div>
        <Button href={signupUrl}>{content.ctaLabel}</Button>
      </section>
    );
  }

  const centered = (layout ?? (quote === undefined ? "centered" : "split")) === "centered";

  return (
    <section id={id} className={centered ? styles.centered : styles.split}>
      <div className={styles.copy}>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
        {content.lede !== undefined && <Lede>{content.lede}</Lede>}
        <Button href={signupUrl}>{content.ctaLabel}</Button>
        {content.contact !== undefined && <p className={styles.contact}>{content.contact}</p>}
      </div>
      {quote !== undefined && (
        <QuoteCard
          variant="glyph"
          text={quote.text}
          person={quote.person}
          {...(quote.context === undefined ? {} : { context: quote.context })}
          showQuoteMarks={!centered}
          className={centered ? styles.stackedQuote : undefined}
        />
      )}
    </section>
  );
}
