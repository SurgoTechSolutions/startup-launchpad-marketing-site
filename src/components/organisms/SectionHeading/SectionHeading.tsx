import type { ReactNode } from "react";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { RichText as RichTextContent } from "@/types";
import styles from "./SectionHeading.module.css";

export interface SectionHeadingProps {
  readonly title: RichTextContent;
}

/** A big heading on its own white band, introducing the sections below it. */
export function SectionHeading({ title }: SectionHeadingProps): ReactNode {
  return (
    <section className={styles.band}>
      <HeadingFill>
        <SectionTitle size="big">
          <RichText content={title} />
        </SectionTitle>
      </HeadingFill>
    </section>
  );
}
