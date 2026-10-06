import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { cx } from "@/lib/cx";
import type { QuoteWallContent } from "@/types";
import styles from "./QuoteWall.module.css";

export interface QuoteWallProps {
  readonly content: QuoteWallContent;
}

/**
 * Two rows of quote cards. Without JavaScript (or with reduced motion) the rows scroll
 * sideways; the marquee is layered on top once interactions are wired up.
 */
export function QuoteWall({ content }: QuoteWallProps): ReactNode {
  const half = Math.ceil(content.quotes.length / 2);
  const rows = [content.quotes.slice(0, half), content.quotes.slice(half)];

  return (
    <section>
      <SectionHead align="start">
        <SectionTitle>
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <div className={styles.wall}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={cx(styles.row, rowIndex === 1 && styles.reverse)}>
            {row.map((quote) => (
              <QuoteCard key={quote.text} variant="wall" text={quote.text} person={quote.person} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
