import type { ReactNode } from "react";
import { CheckIcon } from "@/components/atoms/CheckIcon";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { RichText } from "@/components/molecules/RichText";
import { cx } from "@/lib/cx";
import type { OfferRowContent } from "@/types";
import { CheckGrid } from "../CheckSummary/CheckGrid";
import { IssueCard } from "../ExplainSection/IssueCard";
import { PromptCard } from "../ExplainSection/PromptCard";
import styles from "./OfferRow.module.css";

export interface OfferRowProps {
  readonly content: OfferRowContent;
  /** Tiles on the left and words on the right, on a grey band. */
  readonly mirrored?: boolean;
}

/**
 * One part of an offer, as big as it can be: a large headline, one sentence and either a set of
 * icon tiles or an example issue that changes to its fix prompt on hover. CheckGrid plays a tile's icon when a mouse comes onto it or a finger taps it.
 */
export function OfferRow({ content, mirrored = false }: OfferRowProps): ReactNode {
  return (
    <section className={cx(styles.row, mirrored && styles.mirrored, styles[content.tone])}>
      <div className={styles.copy}>
        <HeadingFill>
          <h2 className={styles.title}>
            <RichText content={content.title} />
          </h2>
        </HeadingFill>
        <p className={styles.detail}>{content.detail}</p>
      </div>
      {content.example !== undefined && (
        <div className={styles.example}>
          <div className={styles.faces}>
            <div className={styles.issueFace}>
              <IssueCard issue={content.example.issue} />
            </div>
            <div className={styles.promptFace}>
              <PromptCard prompt={content.example.prompt} />
            </div>
          </div>
          <p className={styles.hint}>{content.example.hint}</p>
        </div>
      )}
      {content.tiles !== undefined && (
        <CheckGrid className={styles.tiles}>
          {content.tiles.map((tile, index) => (
            <li key={index} className={styles.tile}>
              <CheckIcon kind={tile.kind} className={styles.icon} />
              <span className={styles.label}>{tile.label}</span>
            </li>
          ))}
        </CheckGrid>
      )}
    </section>
  );
}
