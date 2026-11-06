import type { ReactNode } from "react";
import { CopyPromptButton } from "@/components/molecules/CopyPromptButton";
import { cx } from "@/lib/cx";
import type { ExplainContent } from "@/types";
import styles from "./ExplainSection.module.css";
import { Words } from "./Words";

const PROMPT_ID = "fix-prompt";

export interface PromptCardProps {
  readonly prompt: ExplainContent["prompt"];
  readonly className?: string | undefined;
}

/** The fix prompt for an issue, with a button to copy it. */
export function PromptCard({ prompt, className }: PromptCardProps): ReactNode {
  return (
    <div className={cx(styles.card, className)}>
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
  );
}
