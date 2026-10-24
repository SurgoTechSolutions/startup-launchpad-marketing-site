import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { cx } from "@/lib/cx";
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
  /** Extra class for the section, e.g. a page-specific background. */
  readonly className?: string | undefined;
  /** For the split layout: show it on the page background instead of the slate band. */
  readonly plain?: boolean;
  /** Something to show beside the copy in place of the quote, e.g. a picture. Makes the layout split. */
  readonly aside?: ReactNode;
}

/** The closing call to action, with an optional quote. */
export function FinalCta({
  content,
  signupUrl,
  id,
  layout,
  className,
  plain = false,
  aside,
}: FinalCtaProps): ReactNode {
  const { quote } = content;

  if (layout === "banner") {
    return (
      <section id={id} className={styles.banner}>
        <div className={styles.bannerText}>
          <SectionTitle size="find">
            <RichText content={content.title} />
          </SectionTitle>
          {content.lede !== undefined && <Lede>{content.lede}</Lede>}
        </div>
        <Button href={signupUrl}>{content.ctaLabel}</Button>
      </section>
    );
  }

  const centered = (layout ?? (quote === undefined && aside === undefined ? "centered" : "split")) === "centered";

  return (
    <section
      id={id}
      className={cx(centered ? styles.centered : cx(styles.split, !plain && styles.slate), className)}
    >
      <div className={styles.copy}>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
        {content.lede !== undefined && <Lede>{content.lede}</Lede>}
        <Button href={signupUrl}>{content.ctaLabel}</Button>
        {content.contact !== undefined && <p className={styles.contact}>{content.contact}</p>}
      </div>
      {aside !== undefined && <div className={styles.aside}>{aside}</div>}
      {aside === undefined && quote !== undefined && (
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
