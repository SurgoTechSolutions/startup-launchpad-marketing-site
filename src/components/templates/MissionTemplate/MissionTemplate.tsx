import type { ReactNode } from "react";
import { FinalCta } from "@/components/organisms/FinalCta";
import { MissionStatement } from "@/components/organisms/MissionStatement";
import { MissionValues } from "@/components/organisms/MissionValues";
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
          <MissionValues title={content.mission.valuesTitle} values={content.mission.values} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
