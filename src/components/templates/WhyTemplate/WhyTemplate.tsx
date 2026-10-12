import type { ReactNode } from "react";
import { FinalCta } from "@/components/organisms/FinalCta";
import { FoundList } from "@/components/organisms/FoundList";
import { PageIntro } from "@/components/organisms/PageIntro";
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
          <FoundList content={why.found} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} layout="centered" />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
