import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { GitHubMark } from "@/components/atoms/GitHubMark";
import { RevealList } from "@/components/atoms/RevealList";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { StepItem } from "@/components/molecules/StepItem";
import type { HowItWorksContent } from "@/types";
import styles from "./HowItWorks.module.css";

export interface HowItWorksProps {
  readonly content: HowItWorksContent;
  readonly signupUrl: string;
}

export function HowItWorks({ content, signupUrl }: HowItWorksProps): ReactNode {
  return (
    <section className={styles.band}>
      <SectionHead>
        <HeadingFill>
          <SectionTitle size="big">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
      </SectionHead>
      <RevealList className={styles.steps}>
        {content.steps.map((step) => (
          <StepItem key={step.title} step={step} />
        ))}
      </RevealList>
      <div className={styles.cta}>
        <p>{content.ctaText}</p>
        <Button
          href={signupUrl}
          {...(content.ctaIcon === "github" ? { icon: <GitHubMark /> } : {})}
        >
          {content.ctaLabel}
        </Button>
      </div>
    </section>
  );
}
