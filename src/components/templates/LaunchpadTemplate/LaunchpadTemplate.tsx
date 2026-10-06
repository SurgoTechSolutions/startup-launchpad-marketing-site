import type { ReactNode } from "react";
import { DashboardShowcase } from "@/components/organisms/DashboardShowcase";
import { ExplainSection } from "@/components/organisms/ExplainSection";
import { FaqSection } from "@/components/organisms/FaqSection";
import { FeatureQuote } from "@/components/organisms/FeatureQuote";
import { FinalCta } from "@/components/organisms/FinalCta";
import { FounderStory } from "@/components/organisms/FounderStory";
import { FreeScanSection } from "@/components/organisms/FreeScanSection";
import { Hero } from "@/components/organisms/Hero";
import { HowItWorks } from "@/components/organisms/HowItWorks";
import { PricingSection } from "@/components/organisms/PricingSection";
import { QuoteWall } from "@/components/organisms/QuoteWall";
import { RealFindings } from "@/components/organisms/RealFindings";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { StatsSection } from "@/components/organisms/StatsSection";
import { TrustedBy } from "@/components/organisms/TrustedBy";
import { ROUTES } from "@/config/site";
import type { LaunchpadPageContent } from "@/types";
import styles from "./LaunchpadTemplate.module.css";

export interface LaunchpadTemplateProps {
  readonly content: LaunchpadPageContent;
  readonly signupUrl: string;
}

export function LaunchpadTemplate({ content, signupUrl }: LaunchpadTemplateProps): ReactNode {
  const currentPath = ROUTES.launchpad;

  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={currentPath} />
      <div className={styles.wrap}>
        <main>
          <Hero content={content.hero} signupUrl={signupUrl} />
          <TrustedBy content={content.trustedBy} />
          <StatsSection content={content.stats} />
          <FreeScanSection content={content.freeScan} signupUrl={signupUrl} />
          <FounderStory content={content.founderStory} signupUrl={signupUrl} />
          <DashboardShowcase content={content.dashboard} signupUrl={signupUrl} />
          <RealFindings content={content.findings} />
          <ExplainSection content={content.explain} signupUrl={signupUrl} />
          <FeatureQuote content={content.featureQuote} signupUrl={signupUrl} />
          <QuoteWall content={content.quoteWall} />
          <HowItWorks content={content.howItWorks} signupUrl={signupUrl} />
          <PricingSection content={content.pricing} signupUrl={signupUrl} />
          <FaqSection content={content.faq} />
          <FinalCta id="book" content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
