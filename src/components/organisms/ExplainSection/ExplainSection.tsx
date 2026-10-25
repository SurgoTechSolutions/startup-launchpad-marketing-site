import type { CSSProperties, ReactNode } from "react";
import { InView } from "@/components/atoms/InView";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { TypedCode } from "@/components/atoms/TypedCode";
import { CopyPromptButton } from "@/components/molecules/CopyPromptButton";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { cx } from "@/lib/cx";
import type { ExplainContent } from "@/types";
// Hidden for now. Restore this import and the <FixTerminal> line below to bring the terminal back.
// import { FixTerminal } from "../FixTerminal";
import styles from "./ExplainSection.module.css";

const PROMPT_ID = "fix-prompt";

/** The explanation, one span per word so it can appear word by word. Each word carries its place as --w, which staggers it. */
function Words({ text }: { readonly text: string }): ReactNode {
  let place = 0;
  return text.split(/(\s+)/).map((piece, k) => {
    if (piece.trim() === "") return piece;
    const style = { "--w": place } as CSSProperties;
    place += 1;
    return (
      <span key={k} className={styles.word} style={style}>
        {piece}
      </span>
    );
  });
}

export interface ExplainSectionProps {
  readonly content: ExplainContent;
}

/**
 * Two parts. First how an issue is explained, beside a founder's quote. Then the fix prompt for
 * it, stacked and centred.
 */
export function ExplainSection({ content }: ExplainSectionProps): ReactNode {
  const { issue, prompt } = content;

  return (
    <>
      <section className={styles.part}>
        <InView className={cx(styles.title, styles.fill)} threshold={0.6}>
          <SectionTitle size="explain">
            <RichText content={content.title} />
          </SectionTitle>
        </InView>
        <InView className={styles.copy} threshold={0.4}>
          <QuoteCard variant="stacked" text={content.quote.text} person={content.quote.person} />
        </InView>
        <InView className={cx(styles.card, styles.explained)} threshold={0.4}>
          <div className={styles.issue}>
            <div className={styles.tags}>
              <span className={styles.severity}>{issue.severity}</span>
              <span className={styles.category}>{issue.category}</span>
            </div>
            <h3>{issue.title}</h3>
            <p>
              <Words text={issue.body} />
            </p>
            <div className={styles.location}>
              <TypedCode text={issue.location} delayMs={1900} />
              <span>{issue.locationNote}</span>
            </div>
          </div>
        </InView>
      </section>
      <section className={styles.fixPart}>
        <InView className={styles.pasteIn} threshold={0.2}>
          <SectionTitle size="explain">
            <RichText content={content.fixTitle} />
          </SectionTitle>
          <div className={cx(styles.card, styles.fixCard)}>
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
        </InView>
        {/* <FixTerminal content={content.terminal} /> */}
      </section>
    </>
  );
}
