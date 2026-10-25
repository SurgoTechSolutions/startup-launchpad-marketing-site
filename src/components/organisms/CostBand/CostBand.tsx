import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Lede } from "@/components/atoms/Lede";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { CostBandContent } from "@/types";
import styles from "./CostBand.module.css";

export interface CostBandProps {
  readonly content: CostBandContent;
}

/** The price set against a pen test and a contractor, centred on a slate band, with a link to the full comparison. */
export function CostBand({ content }: CostBandProps): ReactNode {
  return (
    <section className={styles.band}>
      <HeadingFill onDark>
        <SectionTitle size="find" className={styles.title}>
          <RichText content={content.title} />
        </SectionTitle>
      </HeadingFill>
      <Lede className={styles.lede}>{content.lede}</Lede>
      <Button href={content.link.href} variant="slide" className={styles.link}>
        {content.link.label}
      </Button>
    </section>
  );
}
