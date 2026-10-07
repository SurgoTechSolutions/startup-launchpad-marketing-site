import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { RuleCard } from "@/components/molecules/RuleCard";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { VerifiedContent } from "@/types";
import styles from "./RulesSection.module.css";

export interface RulesSectionProps {
  readonly content: VerifiedContent["rules"];
}

export function RulesSection({ content }: RulesSectionProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <div className={styles.grid}>
        {content.groups.map((group) => (
          <RuleCard key={group.title} group={group} />
        ))}
      </div>
      <p className={styles.note}>{content.note}</p>
    </section>
  );
}
