import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { HookContent } from "@/types";
import styles from "./HookBanner.module.css";

export interface HookBannerProps {
  readonly content: HookContent;
}

/** One big line, centred on a slate band across the full width, as a pause between sections. */
export function HookBanner({ content }: HookBannerProps): ReactNode {
  return (
    <section className={styles.band}>
      <SectionTitle size="find" className={styles.title}>
        <RichText content={content.title} />
      </SectionTitle>
    </section>
  );
}
