import type { ReactNode } from "react";
import { CheckSummary } from "@/components/organisms/CheckSummary";
import { CostBand } from "@/components/organisms/CostBand";
import { DashboardShowcase } from "@/components/organisms/DashboardShowcase";
import { ExplainSection } from "@/components/organisms/ExplainSection";
import { FaqSection } from "@/components/organisms/FaqSection";
import { FeatureQuote } from "@/components/organisms/FeatureQuote";
import { FinalCta } from "@/components/organisms/FinalCta";
import { FounderStory } from "@/components/organisms/FounderStory";
import { Hero } from "@/components/organisms/Hero";
import { HookBanner } from "@/components/organisms/HookBanner";
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
          <div className={styles.fold}>
            <Hero content={content.hero} signupUrl={signupUrl} />
            <TrustedBy content={content.trustedBy} />
          </div>
          <HookBanner content={content.hook} signupUrl={signupUrl} />
          <StatsSection content={content.stats} />
          <RealFindings content={content.findings} />
          <FounderStory content={content.founderStory} signupUrl={signupUrl} />
          <CheckSummary content={content.checkSummary} />
          <DashboardShowcase content={content.dashboard} signupUrl={signupUrl} />
          <ExplainSection content={content.explain} />
          <FinalCta content={content.fixBanner} signupUrl={signupUrl} layout="banner" />
          <FeatureQuote content={content.featureQuote} signupUrl={signupUrl} />
          <QuoteWall content={content.quoteWall} />
          <HowItWorks content={content.howItWorks} signupUrl={signupUrl} />
          <CostBand content={content.costBand} />
          <PricingSection content={content.pricing} signupUrl={signupUrl} plain />
          <FaqSection content={content.faq} />
          <FinalCta id="book" content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
