import type { ReactNode } from "react";
import { Lede } from "@/components/atoms/Lede";
import { PullQuote } from "@/components/atoms/PullQuote";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { WhyContent } from "@/types";
import styles from "./Reassurance.module.css";

export interface ReassuranceProps {
  readonly content: WhyContent["reassurance"];
}

export function Reassurance({ content }: ReassuranceProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle size="find">{content.title}</SectionTitle>
        <Lede>{content.body}</Lede>
      </SectionHead>
      <div className={styles.quotes}>
        {content.quotes.map((quote) => (
          <PullQuote key={quote.attribution} parts={quote.parts} attribution={quote.attribution} />
        ))}
      </div>
    </section>
  );
}
