import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { cx } from "@/lib/cx";
import type { RichText as RichTextContent } from "@/types";
import styles from "./PromiseStatement.module.css";

export interface PromiseStatementProps {
  readonly content: { readonly title: RichTextContent; readonly text: string; readonly ctaLabel: string };
  readonly signupUrl: string;
  /** Fade back to white at the bottom, for when a white section follows. */
  readonly fadeOut?: boolean;
}

/** A single promise in a card, centred under its heading, with a button to take it up. */
export function PromiseStatement({ content, signupUrl, fadeOut = false }: PromiseStatementProps): ReactNode {
  return (
    <section className={cx(styles.band, fadeOut && styles.fadeOut)}>
      <SectionTitle size="find">
        <RichText content={content.title} />
      </SectionTitle>
      <p className={styles.card}>{content.text}</p>
      <Button href={signupUrl}>{content.ctaLabel}</Button>
    </section>
  );
}
