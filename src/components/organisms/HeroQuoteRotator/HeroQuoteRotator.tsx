import type { ReactNode } from "react";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { cx } from "@/lib/cx";
import type { QuoteWithPerson } from "@/types";
import styles from "./HeroQuoteRotator.module.css";

export interface HeroQuoteRotatorProps {
  readonly quotes: readonly QuoteWithPerson[];
  readonly label: string;
}

/**
 * The hero quote card. Every slide sits in the same grid cell, so the card is always
 * as tall as the longest quote and never jumps. The first slide shows until the
 * interaction is wired up.
 */
export function HeroQuoteRotator({ quotes, label }: HeroQuoteRotatorProps): ReactNode {
  const active = 0;

  return (
    <div className={styles.frame} role="group" aria-roledescription="carousel" aria-label={label}>
      <div className={styles.slides}>
        {quotes.map((quote, index) => {
          const isActive = index === active;
          return (
            <div
              key={quote.text}
              className={cx(styles.slide, isActive && styles.active)}
              aria-hidden={!isActive}
            >
              <QuoteCard
                variant="shout"
                text={quote.text}
                person={quote.person}
                {...(quote.context === undefined ? {} : { context: quote.context })}
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>
      {quotes.length > 1 && (
        <div className={styles.dots} aria-hidden="true">
          {quotes.map((quote, index) => (
            <span key={quote.text} className={cx(styles.dot, index === active && styles.dotActive)} />
          ))}
        </div>
      )}
    </div>
  );
}
