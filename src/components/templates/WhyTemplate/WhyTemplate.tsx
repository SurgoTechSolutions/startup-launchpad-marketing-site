import type { ReactNode } from "react";
import { FinalCta } from "@/components/organisms/FinalCta";
import { PageIntro } from "@/components/organisms/PageIntro";
import { RiskList } from "@/components/organisms/RiskList";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ValueGrid } from "@/components/organisms/ValueGrid";
import { ROUTES } from "@/config/site";
import type { WhyPageContent } from "@/types";
import styles from "./WhyTemplate.module.css";

export interface WhyTemplateProps {
  readonly content: WhyPageContent;
  readonly signupUrl: string;
}

export function WhyTemplate({ content, signupUrl }: WhyTemplateProps): ReactNode {
  const { why } = content;

  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={ROUTES.why} />
      <div className={styles.wrap}>
        <main>
          <PageIntro title={why.intro.title} lede={why.intro.lede} />
          <ValueGrid title={why.reasons.title} values={why.reasons.items} />
          <RiskList content={why.risks} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
