import Image from "next/image";
import type { ReactNode } from "react";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
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
        <SectionTitle as="h1" size="find" className={styles.title}>
          <RichText content={content.title} />
        </SectionTitle>
        <Lede>{content.lede}</Lede>
      </SectionHead>
      <div className={styles.body}>
        <Image
          className={styles.photo}
          src={content.photo.src}
          alt={content.photo.alt}
          placeholder="blur"
          sizes="(max-width: 680px) calc(100vw - 32px), (max-width: 860px) 640px, 460px"
          priority
        />
        <div className={styles.story}>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
