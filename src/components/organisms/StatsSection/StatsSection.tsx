import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { StatCard } from "@/components/molecules/StatCard";
import type { StatsContent } from "@/types";
import styles from "./StatsSection.module.css";

export interface StatsSectionProps {
  readonly content: StatsContent;
}

export function StatsSection({ content }: StatsSectionProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle size="stats">
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <div className={styles.grid}>
        {content.stats.map((stat) => (
          <StatCard key={stat.label} hot value={`${String(stat.value)}${stat.suffix}`} label={stat.label} />
        ))}
      </div>
      <p className={styles.note}>{content.note}</p>
    </section>
  );
}
