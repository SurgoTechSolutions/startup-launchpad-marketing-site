import type { ReactNode } from "react";
import { CountUp } from "@/components/atoms/CountUp";
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
        {content.stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            hot
            value={<CountUp to={stat.value} suffix={stat.suffix} durationMs={1100} delayMs={index * 220} />}
            label={stat.label}
          />
        ))}
      </div>
      <p className={styles.note}>{content.note}</p>
    </section>
  );
}
