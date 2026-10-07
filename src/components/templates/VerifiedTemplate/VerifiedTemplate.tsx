import type { ReactNode } from "react";
import { BadgeShowcase } from "@/components/organisms/BadgeShowcase";
import { FinalCta } from "@/components/organisms/FinalCta";
import { LevelTrack } from "@/components/organisms/LevelTrack";
import { PageIntro } from "@/components/organisms/PageIntro";
import { RulesSection } from "@/components/organisms/RulesSection";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ROUTES } from "@/config/site";
import type { VerifiedPageContent } from "@/types";
import styles from "./VerifiedTemplate.module.css";

export interface VerifiedTemplateProps {
  readonly content: VerifiedPageContent;
  readonly signupUrl: string;
}

export function VerifiedTemplate({ content, signupUrl }: VerifiedTemplateProps): ReactNode {
  const { verified } = content;

  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={ROUTES.verified} />
      <div className={styles.wrap}>
        <main>
          <PageIntro eyebrow={verified.intro.status} title={verified.intro.title} lede={verified.intro.lede} />
          <LevelTrack content={verified.levels} />
          <BadgeShowcase content={verified.badge} />
          <RulesSection content={verified.rules} />
          <FinalCta content={content.finalCta} signupUrl={signupUrl} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
