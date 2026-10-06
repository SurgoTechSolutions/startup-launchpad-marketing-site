import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { FreeScanContent } from "@/types";
import styles from "./FreeScanSection.module.css";

export interface FreeScanSectionProps {
  readonly content: FreeScanContent;
  readonly signupUrl: string;
}

export function FreeScanSection({ content, signupUrl }: FreeScanSectionProps): ReactNode {
  return (
    <section className={styles.section}>
      <SectionTitle size="try">
        <RichText content={content.title} />
      </SectionTitle>
      <Lede className={styles.lede}>{content.lede}</Lede>
      <Button href={signupUrl}>{content.ctaLabel}</Button>
    </section>
  );
}
