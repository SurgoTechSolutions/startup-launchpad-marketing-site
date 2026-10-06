import type { ReactNode } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { MissionContent } from "@/types";
import styles from "./MissionStatement.module.css";

export interface MissionStatementProps {
  readonly content: MissionContent;
}

/** The page heading, the one-sentence mission in a card, and the story behind it. */
export function MissionStatement({ content }: MissionStatementProps): ReactNode {
  return (
    <section className={styles.section}>
      <SectionHead>
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <SectionTitle as="h1" size="find" className={styles.title}>
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <p className={styles.statement}>{content.statement}</p>
      <div className={styles.story}>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
