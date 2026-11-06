import type { ReactNode } from "react";
import { FaqSection } from "@/components/organisms/FaqSection";
import { FinalCta } from "@/components/organisms/FinalCta";
import { HookBanner } from "@/components/organisms/HookBanner";
import { OfferRow } from "@/components/organisms/OfferRow";
import { QuoteStrip } from "@/components/organisms/QuoteStrip";
import { SectionHeading } from "@/components/organisms/SectionHeading";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ROUTES } from "@/config/site";
import type { FreeScanPageContent } from "@/types";
import styles from "./FreeScanTemplate.module.css";

export interface FreeScanTemplateProps {
  readonly content: FreeScanPageContent;
  readonly signupUrl: string;
}

export function FreeScanTemplate({ content, signupUrl }: FreeScanTemplateProps): ReactNode {
  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={ROUTES.freeScan} />
      <div className={styles.wrap}>
        <main>
          <HookBanner content={content.hook} signupUrl={signupUrl} lead>
            <QuoteStrip content={content.quoteStrip} hideTitle />
          </HookBanner>
          <SectionHeading title={content.offerTitle} />
          {content.offerRows.map((row, index) => (
            <OfferRow key={index} content={row} mirrored={index % 2 === 1} />
          ))}
          <FinalCta content={content.offerClose} signupUrl={signupUrl} layout="banner" />
          <FaqSection content={content.faq} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
