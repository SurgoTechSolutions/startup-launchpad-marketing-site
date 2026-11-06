import type { ReactNode } from "react";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { InView } from "@/components/atoms/InView";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import type { ExplainContent } from "@/types";
// Hidden for now. Restore this import and the <FixTerminal> line below to bring the terminal back.
// import { FixTerminal } from "../FixTerminal";
import styles from "./ExplainSection.module.css";
import { IssueCard } from "./IssueCard";
import { PromptCard } from "./PromptCard";

export interface ExplainSectionProps {
  readonly content: ExplainContent;
}

/**
 * Two parts. First how an issue is explained, with the heading on the left and the issue card on
 * the right. Then the fix prompt for it, mirrored: the prompt card left and its heading right.
 */
export function ExplainSection({ content }: ExplainSectionProps): ReactNode {
  const { issue, prompt } = content;

  return (
    <>
      <section className={styles.part}>
        <HeadingFill className={styles.title}>
          <SectionTitle size="explain">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
        <IssueCard issue={issue} />
      </section>
      <section className={styles.fixPart}>
        <InView className={styles.fixIn} threshold={0.2}>
          <HeadingFill className={styles.fixTitle}>
            <SectionTitle size="explain">
              <RichText content={content.fixTitle} />
            </SectionTitle>
          </HeadingFill>
          <PromptCard prompt={prompt} className={styles.fixCard} />
        </InView>
        {/* <FixTerminal content={content.terminal} /> */}
      </section>
    </>
  );
}
