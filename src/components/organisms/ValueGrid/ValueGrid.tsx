import type { ReactNode } from "react";
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
  /** Plain white behind the section, across the full width, with no grid. */
  readonly plain?: boolean;
}

/** A heading over a row of short principle cards. */
export function ValueGrid({ title, values, plain = false }: ValueGridProps): ReactNode {
  return (
    <section className={cx(plain && styles.plain)}>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={title} />
        </SectionTitle>
      </SectionHead>
      <div className={styles.grid}>
        {values.map((value) => (
          <ValueCard key={value.title} title={value.title} body={value.body} />
        ))}
      </div>
    </section>
  );
}
