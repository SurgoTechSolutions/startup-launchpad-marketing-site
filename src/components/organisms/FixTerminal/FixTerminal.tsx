import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { TerminalContent, TerminalLine } from "@/types";
import styles from "./FixTerminal.module.css";

export interface FixTerminalProps {
  readonly content: TerminalContent;
}

const PROMPT_MARKS = { input: ">", ok: "✓" } as const;

function Line({ line }: { readonly line: TerminalLine }): ReactNode {
  if (line.kind === "question") {
    return (
      <div className={cx(styles.line, styles.question)}>
        <span>{line.text}</span>
        <i className={styles.cursor} />
      </div>
    );
  }

  return (
    <div className={cx(styles.line, styles[line.kind])}>
      <b>{PROMPT_MARKS[line.kind]}</b> <span>{line.text}</span>
    </div>
  );
}

/** A terminal window showing a fix being applied. Shown in its finished state until the typing is wired up. */
export function FixTerminal({ content }: FixTerminalProps): ReactNode {
  return (
    <div className={styles.term} role="img" aria-label={content.label}>
      <div className={styles.bar} aria-hidden="true">
        <i className={styles.red} />
        <i className={styles.yellow} />
        <i className={styles.green} />
        <span>{content.windowTitle}</span>
      </div>
      <div className={styles.body} aria-hidden="true">
        {content.lines.map((line) => (
          <Line key={line.text} line={line} />
        ))}
      </div>
    </div>
  );
}
