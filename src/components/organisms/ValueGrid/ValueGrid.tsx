import type { ReactNode } from "react";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { ValueCard } from "@/components/molecules/ValueCard";
import { cx } from "@/lib/cx";
import type { MissionValue, RichText as RichTextContent } from "@/types";
import styles from "./ValueGrid.module.css";

export interface ValueGridProps {
  readonly title: RichTextContent;
  readonly values: readonly MissionValue[];
  /**
   * A plain full-width background instead of the page grid. Grey fades in from white above.
   * Left out, the section sits on the page grid.
   */
  readonly tone?: "white" | "grey";
}

/** A heading over a row of short principle cards. */
export function ValueGrid({ title, values, tone }: ValueGridProps): ReactNode {
  return (
    <section className={cx(tone === "white" && styles.white, tone === "grey" && styles.grey)}>
      <SectionHead>
        <HeadingFill>
          <SectionTitle size="find">
            <RichText content={title} />
          </SectionTitle>
        </HeadingFill>
      </SectionHead>
      <div className={styles.grid}>
        {values.map((value) => (
          <ValueCard key={value.title} title={value.title} body={value.body} />
        ))}
      </div>
    </section>
  );
}
