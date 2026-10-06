import type { ReactNode } from "react";
import { CostComparison } from "@/components/organisms/CostComparison";
import { FinalCta } from "@/components/organisms/FinalCta";
import { PricingSection } from "@/components/organisms/PricingSection";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ROUTES } from "@/config/site";
import type { PricingPageContent } from "@/types";
import styles from "./PricingTemplate.module.css";

export interface PricingTemplateProps {
  readonly content: PricingPageContent;
  readonly signupUrl: string;
}

export function PricingTemplate({ content, signupUrl }: PricingTemplateProps): ReactNode {
  const currentPath = ROUTES.pricing;

  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={currentPath} />
      <div className={styles.wrap}>
        <main>
          <PricingSection content={content.pricing} signupUrl={signupUrl} headingLevel="h1" />
          <CostComparison content={content.comparison} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
