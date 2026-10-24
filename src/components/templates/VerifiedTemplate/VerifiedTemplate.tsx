import type { ReactNode } from "react";
import { LevelMark } from "@/components/atoms/LevelMark";
import { BadgeShowcase } from "@/components/organisms/BadgeShowcase";
import { FinalCta } from "@/components/organisms/FinalCta";
import { LevelTrack } from "@/components/organisms/LevelTrack";
import { PageIntro } from "@/components/organisms/PageIntro";
// Hidden for now. Restore this import and the <RulesSection> line below to bring the rules back.
// import { RulesSection } from "@/components/organisms/RulesSection";
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
          <PageIntro
            title={verified.intro.title}
            lede={verified.intro.lede}
            {...(verified.intro.status === undefined ? {} : { eyebrow: verified.intro.status })}
          />
          <LevelTrack content={verified.levels} tone="grey" />
          <BadgeShowcase content={verified.badge} tone="white" />
          {/* <RulesSection content={verified.rules} /> */}
          <FinalCta
            content={content.finalCta}
            signupUrl={signupUrl}
            aside={<LevelMark metal="gold" height={240} />}
          />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
