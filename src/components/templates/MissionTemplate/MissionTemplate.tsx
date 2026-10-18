import type { ReactNode } from "react";
import { FinalCta } from "@/components/organisms/FinalCta";
import { MissionStatement } from "@/components/organisms/MissionStatement";
import { PromiseStatement } from "@/components/organisms/PromiseStatement";
import { ValueGrid } from "@/components/organisms/ValueGrid";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ROUTES } from "@/config/site";
import type { MissionPageContent } from "@/types";
import styles from "./MissionTemplate.module.css";

export interface MissionTemplateProps {
  readonly content: MissionPageContent;
  readonly signupUrl: string;
}

export function MissionTemplate({ content, signupUrl }: MissionTemplateProps): ReactNode {
  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={ROUTES.mission} />
      <div className={styles.wrap}>
        <main>
          <MissionStatement content={content.mission} />
          <ValueGrid title={content.mission.valuesTitle} values={content.mission.values} tone="white" />
          <PromiseStatement content={content.mission.promise} signupUrl={signupUrl} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} className={styles.wideQuote} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
