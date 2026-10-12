import Image from "next/image";
import type { ReactNode } from "react";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { MissionContent } from "@/types";
import styles from "./MissionStatement.module.css";

export interface MissionStatementProps {
  readonly content: MissionContent;
}

/** The mission as the page heading, a photo of the team, and the story behind it. */
export function MissionStatement({ content }: MissionStatementProps): ReactNode {
  return (
    <section className={styles.section}>
      <SectionHead>
        <h1 className={styles.statement}>{content.statement}</h1>
      </SectionHead>
      <Image
        className={styles.photo}
        src={content.photo.src}
        alt={content.photo.alt}
        width={content.photo.width}
        height={content.photo.height}
        sizes="(max-width: 860px) calc(100vw - 32px), 820px"
        priority
      />
      <div className={styles.story}>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
