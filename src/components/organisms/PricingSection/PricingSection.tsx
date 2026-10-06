import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PlanCard } from "@/components/molecules/PlanCard";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
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
    <section>
      <SectionHead>
        <SectionTitle as={headingLevel} size="big">
          <RichText content={content.title} />
        </SectionTitle>
        <Lede>{content.lede}</Lede>
      </SectionHead>
      <div className={styles.plans}>
        {content.plans.map((plan) => (
          <PlanCard key={plan.title} plan={plan} ctaHref={signupUrl} />
        ))}
      </div>
      {content.moreLink !== undefined && (
        <p className={styles.more}>
          <Button href={content.moreLink.href} variant="underline">
            {content.moreLink.label}
          </Button>
        </p>
      )}
      <QuoteCard variant="centered" text={content.quote.text} person={content.quote.person} />
    </section>
  );
}
