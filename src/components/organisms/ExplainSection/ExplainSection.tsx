import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CopyPromptButton } from "@/components/molecules/CopyPromptButton";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { cx } from "@/lib/cx";
import type { ExplainContent } from "@/types";
// Hidden for now. Restore this import and the <FixTerminal> line below to bring the terminal back.
// import { FixTerminal } from "../FixTerminal";
import styles from "./ExplainSection.module.css";

const PROMPT_ID = "fix-prompt";

export interface ExplainSectionProps {
  readonly content: ExplainContent;
  readonly signupUrl: string;
}

/**
 * Two parts. First how an issue is explained, beside a founder's quote. Then the fix prompt for
 * it, with its heading and the call to action alongside.
 */
export function ExplainSection({ content, signupUrl }: ExplainSectionProps): ReactNode {
  const { issue, prompt } = content;

  return (
    <>
      <section className={styles.part}>
        <SectionTitle size="explain" className={styles.title}>
          <RichText content={content.title} />
        </SectionTitle>
        <div className={styles.copy}>
          <QuoteCard variant="stacked" text={content.quote.text} person={content.quote.person} />
        </div>
        <div className={styles.card}>
          <div className={styles.issue}>
            <div className={styles.tags}>
              <span className={styles.severity}>{issue.severity}</span>
              <span className={styles.category}>{issue.category}</span>
            </div>
            <h3>{issue.title}</h3>
            <p>{issue.body}</p>
            <div className={styles.location}>
              <code>{issue.location}</code>
              <span>{issue.locationNote}</span>
            </div>
          </div>
        </div>
      </section>
      <section className={cx(styles.part, styles.fixPart)}>
        <div className={styles.side}>
          <SectionTitle size="explain">
            <RichText content={content.fixTitle} />
          </SectionTitle>
          <Button href={signupUrl}>{content.ctaLabel}</Button>
        </div>
        <div className={styles.card}>
          <div className={styles.fix}>
            <div className={styles.promptBar}>
              <span>{prompt.heading}</span>
              <CopyPromptButton text={prompt.text} targetId={PROMPT_ID} labels={prompt.copyLabels} />
            </div>
            <pre id={PROMPT_ID} className={styles.prompt}>
              {prompt.text}
            </pre>
          </div>
        </div>
        {/* <FixTerminal content={content.terminal} /> */}
      </section>
    </>
  );
}
