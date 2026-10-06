import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { FindingCard } from "@/components/molecules/FindingCard";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { FindingsContent } from "@/types";
import styles from "./RealFindings.module.css";

export interface RealFindingsProps {
  readonly content: FindingsContent;
}

export function RealFindings({ content }: RealFindingsProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <div className={styles.grid}>
        {content.findings.map((finding) => (
          <FindingCard key={finding.title} finding={finding} />
        ))}
      </div>
    </section>
  );
}
