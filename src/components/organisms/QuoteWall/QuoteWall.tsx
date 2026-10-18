import type { ReactNode } from "react";
import { Marquee } from "@/components/atoms/Marquee";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import type { QuoteWallContent } from "@/types";
import styles from "./QuoteWall.module.css";

export interface QuoteWallProps {
  readonly content: QuoteWallContent;
}

/** Two rows of quote cards scrolling in opposite directions. */
export function QuoteWall({ content }: QuoteWallProps): ReactNode {
  const half = Math.ceil(content.quotes.length / 2);
  const rows = [content.quotes.slice(0, half), content.quotes.slice(half)].map((row) =>
    row.map((quote) => <QuoteCard key={quote.text} variant="wall" text={quote.text} person={quote.person} />),
  );

  return (
    <section aria-label={content.label}>
      <Marquee rows={rows} className={styles.wall} />
    </section>
  );
}
