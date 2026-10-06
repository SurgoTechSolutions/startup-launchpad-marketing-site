import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { Person } from "@/types";
import { PersonCredit } from "../PersonCredit";
import styles from "./QuoteCard.module.css";

/**
 * Quote layouts from the mock-up.
 * shout: hero slide (the rotator draws the frame). spotlight: founder story card with the big quote mark.
 * rule: orange left rule. stacked: card with the offset outline. wall: quote wall card.
 * centered: pricing quote. glyph: closing card with the big quote mark. card: plain card.
 */
export type QuoteCardVariant =
  | "shout"
  | "spotlight"
  | "rule"
  | "stacked"
  | "wall"
  | "centered"
  | "glyph"
  | "card";

/** These variants show a large orange quote mark instead of inline quote marks. */
const GLYPH_VARIANTS: ReadonlySet<QuoteCardVariant> = new Set(["spotlight", "glyph"]);

export interface QuoteCardProps {
  readonly text: string;
  readonly person: Person;
  readonly variant: QuoteCardVariant;
  readonly context?: string;
  readonly priority?: boolean;
  /** Set false to show the words with no quote marks at all. */
  readonly showQuoteMarks?: boolean;
  readonly className?: string | undefined;
}

export function QuoteCard({
  text,
  person,
  variant,
  context,
  priority = false,
  showQuoteMarks = true,
  className,
}: QuoteCardProps): ReactNode {
  const glyph = showQuoteMarks && GLYPH_VARIANTS.has(variant);
  const inlineMarks = showQuoteMarks && !GLYPH_VARIANTS.has(variant);

  return (
    <figure className={cx(styles.quote, styles[variant], className)}>
      {context !== undefined && <span className={styles.context}>{context}</span>}
      {glyph && (
        <span className={styles.quoteMark} aria-hidden="true">
          &quot;
        </span>
      )}
      <blockquote className={styles.text}>{inlineMarks ? `"${text}"` : text}</blockquote>
      <PersonCredit
        person={person}
        avatarSize={variant === "spotlight" ? "lg" : "md"}
        priority={priority}
      />
    </figure>
  );
}
