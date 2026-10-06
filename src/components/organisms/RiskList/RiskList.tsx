import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { RiskCard } from "@/components/molecules/RiskCard";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { WhyContent } from "@/types";

export interface RiskListProps {
  readonly content: WhyContent["risks"];
}

export function RiskList({ content }: RiskListProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      {content.items.map((risk) => (
        <RiskCard key={risk.number} risk={risk} />
      ))}
    </section>
  );
}
