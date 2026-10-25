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

/**
 * The explanation, one span per word so it can appear word by word, with the emphasised phrase
 * wrapped in a mark. Each word carries its place as --w, which staggers it.
 */
function Words({ text, emphasis }: { readonly text: string; readonly emphasis?: string | undefined }): ReactNode {
  const at = emphasis === undefined ? -1 : text.indexOf(emphasis);
  const parts =
    at < 0 || emphasis === undefined
      ? [{ text, marked: false }]
      : [
          { text: text.slice(0, at), marked: false },
          { text: emphasis, marked: true },
          { text: text.slice(at + emphasis.length), marked: false },
        ];
  let place = 0;
  return parts.map((part, index) => {
    const words = part.text.split(/(\s+)/).map((piece, k) => {
      if (piece.trim() === "") return piece;
      const style = { "--w": place } as CSSProperties;
      place += 1;
      return (
        <span key={k} className={styles.word} style={style}>
          {piece}
        </span>
      );
    });
    return part.marked ? (
      <mark key={index} className={styles.mark}>
        {words}
      </mark>
    ) : (
      words
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
              <Words text={issue.body} emphasis={issue.emphasis} />
            </p>
            <div className={styles.location}>
              <TypedCode text={issue.location} delayMs={1900} />
              <span>{issue.locationNote}</span>
            </div>
          </div>
        </InView>
      </section>
      <section className={styles.fixPart}>
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
        {/* <FixTerminal content={content.terminal} /> */}
      </section>
    </>
  );
}
