import type { CSSProperties, ReactNode } from "react";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { InView } from "@/components/atoms/InView";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CopyPromptButton } from "@/components/molecules/CopyPromptButton";
import { RichText } from "@/components/molecules/RichText";
import { cx } from "@/lib/cx";
import type { ExplainContent } from "@/types";
// Hidden for now. Restore this import and the <FixTerminal> line below to bring the terminal back.
// import { FixTerminal } from "../FixTerminal";
import styles from "./ExplainSection.module.css";

const PROMPT_ID = "fix-prompt";

/** The explanation or prompt, one span per word so it can appear word by word. Each word carries its place as --w, which staggers it. */
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
              <code>{issue.location}</code>
              <span>{issue.locationNote}</span>
            </div>
          </div>
        </InView>
      </section>
      <section className={styles.fixPart}>
        <InView className={styles.fixIn} threshold={0.2}>
          <HeadingFill className={styles.fixTitle}>
            <SectionTitle size="explain">
              <RichText content={content.fixTitle} />
            </SectionTitle>
          </HeadingFill>
          <div className={cx(styles.card, styles.fixCard)}>
            <div className={styles.fix}>
              <div className={styles.promptBar}>
                <span>{prompt.heading}</span>
                <CopyPromptButton text={prompt.text} targetId={PROMPT_ID} labels={prompt.copyLabels} />
              </div>
              <pre id={PROMPT_ID} className={styles.prompt}>
                <Words text={prompt.text} />
              </pre>
            </div>
          </div>
        </InView>
        {/* <FixTerminal content={content.terminal} /> */}
      </section>
    </>
  );
}
