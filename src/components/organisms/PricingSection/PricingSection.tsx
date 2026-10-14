import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PlanCard } from "@/components/molecules/PlanCard";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { HeroQuoteRotator } from "@/components/organisms/HeroQuoteRotator";
import type { PricingContent } from "@/types";
import styles from "./PricingSection.module.css";

export interface PricingSectionProps {
  readonly content: PricingContent;
  readonly signupUrl: string;
  /** The pricing page uses this title as its h1. */
  readonly headingLevel?: "h1" | "h2";
}

export function PricingSection({ content, signupUrl, headingLevel = "h2" }: PricingSectionProps): ReactNode {
  return (
    <section className={styles.section}>
      <SectionHead>
        <SectionTitle as={headingLevel} size="big">
          <RichText content={content.title} />
        </SectionTitle>
        {content.lede !== undefined && <Lede>{content.lede}</Lede>}
      </SectionHead>
      {content.billing !== undefined && (
        <fieldset className={styles.billing}>
          <legend className="sr-only">{content.billing.legend}</legend>
          <label className={styles.option}>
            <input type="radio" name="billing" value="monthly" defaultChecked className={styles.radio} />
            {content.billing.monthly}
          </label>
          <label className={styles.option}>
            <input type="radio" name="billing" value="yearly" className={styles.radio} />
            {content.billing.yearly}
            <span className={styles.saving}>{content.billing.saving}</span>
          </label>
        </fieldset>
      )}
      <div className={styles.plans}>
        {content.plans.map((plan) => (
          <PlanCard
            key={plan.title}
            plan={plan}
            ctaHref={signupUrl}
            headingLevel={headingLevel === "h1" ? "h2" : "h3"}
          />
        ))}
      </div>
      {content.moreLink !== undefined && (
        <p className={styles.more}>
          <Button href={content.moreLink.href} variant="underline">
            {content.moreLink.label}
          </Button>
        </p>
      )}
      {content.rotation === undefined ? (
        <QuoteCard variant="centered" text={content.quote.text} person={content.quote.person} />
      ) : (
        <HeroQuoteRotator
          framed={false}
          intervalMs={3000}
          label={content.rotation.label}
          dotLabels={content.rotation.quotes.map((quote) => `${content.rotation?.dotLabel ?? ""} ${quote.person.name}`)}
          slides={content.rotation.quotes.map((quote) => (
            <QuoteCard key={quote.text} variant="centered" text={quote.text} person={quote.person} />
          ))}
        />
      )}
    </section>
  );
}
