import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { RevealList } from "@/components/atoms/RevealList";
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
    <section>
      <SectionHead>
        <SectionTitle size="big">
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <RevealList className={styles.steps}>
        {content.steps.map((step) => (
          <StepItem key={step.title} step={step} />
        ))}
      </RevealList>
      <div className={styles.cta}>
        <p>{content.ctaText}</p>
        <Button href={signupUrl}>{content.ctaLabel}</Button>
      </div>
    </section>
  );
}
