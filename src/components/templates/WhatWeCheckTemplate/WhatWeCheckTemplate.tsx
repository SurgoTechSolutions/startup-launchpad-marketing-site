import type { ReactNode } from "react";
import { CheckAreaList } from "@/components/organisms/CheckAreaList";
import { FinalCta } from "@/components/organisms/FinalCta";
import { PageIntro } from "@/components/organisms/PageIntro";
import { ScoringGuide } from "@/components/organisms/ScoringGuide";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ROUTES } from "@/config/site";
import type { WhatWeCheckPageContent } from "@/types";
import styles from "./WhatWeCheckTemplate.module.css";

export interface WhatWeCheckTemplateProps {
  readonly content: WhatWeCheckPageContent;
  readonly signupUrl: string;
}

export function WhatWeCheckTemplate({ content, signupUrl }: WhatWeCheckTemplateProps): ReactNode {
  const { page } = content;

  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={ROUTES.whatWeCheck} />
      <div className={styles.wrap}>
        <main>
          <PageIntro title={page.intro.title} lede={page.intro.lede} />
          <CheckAreaList content={page} />
          <ScoringGuide content={page.scoring} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
