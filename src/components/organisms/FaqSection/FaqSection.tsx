import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { FaqItem } from "@/components/molecules/FaqItem";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { FaqContent } from "@/types";
import styles from "./FaqSection.module.css";

export interface FaqSectionProps {
  readonly content: FaqContent;
}

export function FaqSection({ content }: FaqSectionProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <div className={styles.list}>
        {content.faqs.map((faq) => (
          <FaqItem key={faq.question} faq={faq} />
        ))}
      </div>
    </section>
  );
}
