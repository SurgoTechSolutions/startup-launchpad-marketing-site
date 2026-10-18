import type { ReactNode } from "react";
import { FinalCta } from "@/components/organisms/FinalCta";
import { HookBanner } from "@/components/organisms/HookBanner";
import { MissionStatement } from "@/components/organisms/MissionStatement";
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
          <HookBanner content={content.pullQuote} />
          <ValueGrid title={content.mission.valuesTitle} values={content.mission.values} plain />
          <FinalCta
            content={content.finalCta}
            signupUrl={signupUrl}
            layout="centered"
            className={styles.whiteBand}
          />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
