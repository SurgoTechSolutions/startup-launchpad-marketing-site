import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { LegalClause } from "@/components/molecules/LegalClause";
import { RichText } from "@/components/molecules/RichText";
import type { LegalDocumentContent } from "@/types";
import styles from "./LegalDocument.module.css";

export interface LegalDocumentProps {
  readonly content: LegalDocumentContent;
}

/** A long-form legal document: title and version, summary card, numbered sections, company details. */
export function LegalDocument({ content }: LegalDocumentProps): ReactNode {
  return (
    <article className={styles.document}>
      <header className={styles.head}>
        <SectionTitle as="h1" size="find">
          {content.title}
        </SectionTitle>
        <p className={styles.version}>{content.version}</p>
      </header>

      <section className={styles.card} aria-labelledby="summary">
        <h2 id="summary" className={styles.cardTitle}>
          {content.summary.title}
        </h2>
        {content.summary.paragraphs.map((paragraph, index) => (
          // Paragraphs are static content, so their position is a stable key.
          <p key={index}>
            <RichText content={paragraph} />
          </p>
        ))}
      </section>

      {content.sections.map((section) => (
        <section key={section.number} className={styles.section} aria-labelledby={`section-${section.number}`}>
          <h2 id={`section-${section.number}`} className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>{section.number}.</span> {section.title}
          </h2>
          {section.clauses.map((clause) => (
            <LegalClause key={clause.number} clause={clause} />
          ))}
        </section>
      ))}

      <section className={styles.card} aria-labelledby="details">
        <h2 id="details" className={styles.cardTitle}>
          {content.details.title}
        </h2>
        <address className={styles.details}>
          {content.details.lines.map((line, index) => (
            // Lines are static content, so their position is a stable key.
            <span key={index}>
              <RichText content={line} />
            </span>
          ))}
        </address>
      </section>
    </article>
  );
}
