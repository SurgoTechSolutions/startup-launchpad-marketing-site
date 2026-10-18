import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { HookContent } from "@/types";
import styles from "./HookBanner.module.css";

export interface HookBannerProps {
  readonly content: HookContent;
  /** Where the button goes, when the content has one. */
  readonly signupUrl?: string;
}

/** One big line, centred on a slate band across the full width, as a pause between sections. */
export function HookBanner({ content, signupUrl }: HookBannerProps): ReactNode {
  return (
    <section className={styles.band}>
      <SectionTitle size="find" className={styles.title}>
        <RichText content={content.title} />
      </SectionTitle>
      {content.ctaLabel !== undefined && signupUrl !== undefined && (
        <Button href={signupUrl}>{content.ctaLabel}</Button>
      )}
    </section>
  );
}
