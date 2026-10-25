import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { cx } from "@/lib/cx";
import type { RichText as RichTextContent } from "@/types";
import styles from "./PromiseStatement.module.css";

export interface PromiseStatementProps {
  readonly content: { readonly title: RichTextContent; readonly text: string; readonly ctaLabel: string };
  readonly signupUrl: string;
  /** Fade in from white at the top. Off when a grey section sits above. */
  readonly fadeIn?: boolean;
  /** Fade back to white at the bottom, for when a white section follows. */
  readonly fadeOut?: boolean;
}

/** A single promise in a card, centred under its heading, with a button to take it up. */
export function PromiseStatement({ content, signupUrl, fadeIn = true, fadeOut = false }: PromiseStatementProps): ReactNode {
  return (
    <section className={cx(styles.band, !fadeIn && styles.solid, fadeOut && styles.fadeOut)}>
      <HeadingFill>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
      </HeadingFill>
      <p className={styles.card}>{content.text}</p>
      <Button href={signupUrl}>{content.ctaLabel}</Button>
    </section>
  );
}
