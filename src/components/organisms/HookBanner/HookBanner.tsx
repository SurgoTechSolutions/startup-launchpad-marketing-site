import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { HookContent } from "@/types";
import styles from "./HookBanner.module.css";

export interface HookBannerProps {
  readonly content: HookContent;
  readonly signupUrl: string;
}

/**
 * One big question, centred on a slate band across the full width, with a button to answer it.
 * The stats that follow answer it for anyone who keeps scrolling.
 */
export function HookBanner({ content, signupUrl }: HookBannerProps): ReactNode {
  return (
    <section className={styles.band}>
      <SectionTitle size="find" className={styles.title}>
        <RichText content={content.title} />
      </SectionTitle>
      <Button href={signupUrl}>{content.ctaLabel}</Button>
    </section>
  );
}
