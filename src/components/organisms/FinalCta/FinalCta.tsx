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
}

/**
 * The closing call to action. With a quote it is a two-column block (main page);
 * without one it is a single centred heading and button (pricing page).
 */
export function FinalCta({ content, signupUrl, id }: FinalCtaProps): ReactNode {
  const { quote } = content;

  return (
    <section id={id} className={cx(quote === undefined ? styles.centered : styles.split)}>
      <div className={styles.copy}>
        <SectionTitle size={quote === undefined ? "find" : "base"}>
          <RichText content={content.title} />
        </SectionTitle>
        {content.lede !== undefined && <Lede>{content.lede}</Lede>}
        <Button href={signupUrl}>{content.ctaLabel}</Button>
        {content.contact !== undefined && <p className={styles.contact}>{content.contact}</p>}
      </div>
      {quote !== undefined && <QuoteCard variant="glyph" text={quote.text} person={quote.person} />}
    </section>
  );
}
