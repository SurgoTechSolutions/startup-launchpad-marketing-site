import type { ReactNode } from "react";
import { FaqSection } from "@/components/organisms/FaqSection";
import { FinalCta } from "@/components/organisms/FinalCta";
import { HookBanner } from "@/components/organisms/HookBanner";
import { OfferRow } from "@/components/organisms/OfferRow";
import { QuoteStrip } from "@/components/organisms/QuoteStrip";
import { SectionHeading } from "@/components/organisms/SectionHeading";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { StatsSection } from "@/components/organisms/StatsSection";
import { TrustedBy } from "@/components/organisms/TrustedBy";
import { ROUTES } from "@/config/site";
import type { FreeScanPageContent } from "@/types";
import styles from "./FreeScanTemplate.module.css";

export interface FreeScanTemplateProps {
  readonly content: FreeScanPageContent;
  readonly signupUrl: string;
}

/**
 * A video sales letter: headline, video and button first, then who backs us, what you get,
 * the numbers, what founders said, the guarantee, the objections, and one last button.
 * The header and footer carry no page links, so the button is the only way on.
 */
export function FreeScanTemplate({ content, signupUrl }: FreeScanTemplateProps): ReactNode {
  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={ROUTES.freeScan} minimal />
      <div className={styles.wrap}>
        <main>
          <HookBanner content={content.hook} signupUrl={signupUrl} lead>
            <TrustedBy content={content.trustedBy} unlinked />
          </HookBanner>
          <SectionHeading title={content.offerTitle} />
          {content.offerRows.map((row, index) => (
            <OfferRow key={index} content={row} mirrored={index % 2 === 1} />
          ))}
          <StatsSection content={content.stats} />
          <QuoteStrip content={content.quoteStrip} />
          <FinalCta content={content.guarantee} signupUrl={signupUrl} layout="banner" />
          <FaqSection content={content.faq} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} minimal />
      </div>
    </>
  );
}
