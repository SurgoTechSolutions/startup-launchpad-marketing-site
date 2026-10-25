import type { ReactNode } from "react";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { WhyContent } from "@/types";
import styles from "./FoundList.module.css";

export interface FoundListProps {
  readonly content: WhyContent["found"];
}

/** A short list of real findings, each tagged with what it puts at risk. */
export function FoundList({ content }: FoundListProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <HeadingFill>
          <SectionTitle size="find">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
      </SectionHead>
      <ul className={styles.list}>
        {content.items.map((item) => (
          <li key={item.text} className={styles.item}>
            <span className={styles.tag}>{item.tag}</span>
            <span className={styles.text}>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
