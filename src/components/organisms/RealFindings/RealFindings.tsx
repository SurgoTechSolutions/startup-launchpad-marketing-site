import type { ReactNode } from "react";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { InView } from "@/components/atoms/InView";
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
    <section className={styles.band}>
      <SectionHead>
        <HeadingFill>
          <SectionTitle size="find">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
      </SectionHead>
      <div className={styles.grid}>
        {content.findings.map((finding) => (
          <InView key={finding.title} className={styles.reveal} threshold={0.3}>
            <FindingCard finding={finding} />
          </InView>
        ))}
      </div>
    </section>
  );
}
