import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { ValueCard } from "@/components/molecules/ValueCard";
import type { MissionContent } from "@/types";
import styles from "./MissionValues.module.css";

export interface MissionValuesProps {
  readonly title: MissionContent["valuesTitle"];
  readonly values: MissionContent["values"];
}

export function MissionValues({ title, values }: MissionValuesProps): ReactNode {
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
