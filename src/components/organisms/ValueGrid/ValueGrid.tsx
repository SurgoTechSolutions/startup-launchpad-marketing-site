import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { ValueCard } from "@/components/molecules/ValueCard";
import type { MissionValue, RichText as RichTextContent } from "@/types";
import styles from "./ValueGrid.module.css";

export interface ValueGridProps {
  readonly title: RichTextContent;
  readonly values: readonly MissionValue[];
}

/** A heading over a row of short principle cards. */
export function ValueGrid({ title, values }: ValueGridProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle>
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
