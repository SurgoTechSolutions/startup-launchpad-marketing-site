import Image from "next/image";
import type { ReactNode } from "react";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { NameCredit } from "@/components/molecules/NameCredit";
import { RichText } from "@/components/molecules/RichText";
import type { ProfileContent } from "@/types";
import styles from "./FounderProfile.module.css";

export interface FounderProfileProps {
  readonly content: ProfileContent;
}

/** One of the team: their photo with their name and role under it, beside a heading and a few lines about them. */
export function FounderProfile({ content }: FounderProfileProps): ReactNode {
  return (
    <section className={styles.band}>
      <figure className={styles.figure}>
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
        <figcaption>
          <NameCredit credit={content} />
        </figcaption>
      </figure>
      <div className={styles.text}>
        <HeadingFill>
          <SectionTitle size="find">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
