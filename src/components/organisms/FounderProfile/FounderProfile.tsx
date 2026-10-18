import Image from "next/image";
import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { ProfileContent } from "@/types";
import styles from "./FounderProfile.module.css";

export interface FounderProfileProps {
  readonly content: ProfileContent;
}

/** One of the team: their photo beside a heading, their name and role, and a few lines about them. */
export function FounderProfile({ content }: FounderProfileProps): ReactNode {
  return (
    <section className={styles.band}>
      <div className={styles.photo}>
        <Image
          src={content.photo.src}
          alt={content.photo.alt}
          fill
          placeholder="blur"
          sizes="(max-width: 860px) 280px, 360px"
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
        <p className={styles.who}>
          <b>{content.name}</b>
          <span>{content.role}</span>
        </p>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
