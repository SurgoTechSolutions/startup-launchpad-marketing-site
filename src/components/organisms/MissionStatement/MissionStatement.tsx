import type { ReactNode } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { MissionContent } from "@/types";
import styles from "./MissionStatement.module.css";

export interface MissionStatementProps {
  readonly content: MissionContent;
}

/** The mission as the page heading, and the story behind it. */
export function MissionStatement({ content }: MissionStatementProps): ReactNode {
  return (
    <section className={styles.section}>
      <SectionHead>
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h1 className={styles.statement}>{content.statement}</h1>
      </SectionHead>
      <div className={styles.story}>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
