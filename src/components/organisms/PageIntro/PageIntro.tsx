import type { ReactNode } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { RichText as RichTextContent } from "@/types";
import styles from "./PageIntro.module.css";

export interface PageIntroProps {
  readonly title: RichTextContent;
  readonly lede: string;
  readonly eyebrow?: string;
}

/** The opening of an inner page: its h1 and an intro paragraph, centred. */
export function PageIntro({ title, lede, eyebrow }: PageIntroProps): ReactNode {
  return (
    <section className={styles.intro}>
      {eyebrow !== undefined && <Eyebrow>{eyebrow}</Eyebrow>}
      <SectionTitle as="h1" size="find" className={styles.title}>
        <RichText content={title} />
      </SectionTitle>
      <Lede>{lede}</Lede>
    </section>
  );
}
