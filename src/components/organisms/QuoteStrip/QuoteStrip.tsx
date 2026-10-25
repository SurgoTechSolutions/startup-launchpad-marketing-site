import type { ReactNode } from "react";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { Marquee } from "@/components/atoms/Marquee";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { QuoteStripContent } from "@/types";
import styles from "./QuoteStrip.module.css";

export interface QuoteStripProps {
  readonly content: QuoteStripContent;
}

/** Two rows of quote cards scrolling in opposite directions, under a section heading. */
export function QuoteStrip({ content }: QuoteStripProps): ReactNode {
  const half = Math.ceil(content.quotes.length / 2);
  const rows = [content.quotes.slice(0, half), content.quotes.slice(half)].map((row) =>
    row.map((quote) => <QuoteCard key={quote.text} variant="wall" text={quote.text} person={quote.person} />),
  );

  return (
    <section className={styles.strip}>
      <SectionHead align="start">
        <HeadingFill>
          <SectionTitle size="find">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
      </SectionHead>
      <Marquee rows={rows} className={styles.rows} />
    </section>
  );
}
