import type { ReactNode } from "react";
import { AreaIcon } from "@/components/atoms/AreaIcon";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { RichText as RichTextContent } from "@/types";
import styles from "./PromiseStatement.module.css";

export interface PromiseStatementProps {
  readonly title: RichTextContent;
  readonly text: string;
}

/** A single promise, set large and centred under a shield, like a pull quote. */
export function PromiseStatement({ title, text }: PromiseStatementProps): ReactNode {
  return (
    <section className={styles.band}>
      <AreaIcon area="security" className={styles.icon} />
      <SectionTitle size="find">
        <RichText content={title} />
      </SectionTitle>
      <p className={styles.text}>{text}</p>
    </section>
  );
}
