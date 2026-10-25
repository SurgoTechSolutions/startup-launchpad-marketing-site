import type { ReactNode } from "react";
import { Lede } from "@/components/atoms/Lede";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { LevelRow } from "@/components/molecules/LevelRow";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { cx } from "@/lib/cx";
import type { VerifiedContent } from "@/types";
import styles from "./LevelTrack.module.css";

export interface LevelTrackProps {
  readonly content: VerifiedContent["levels"];
  /**
   * A plain full-width background instead of the page grid. Grey fades in from white above.
   * Left out, the section sits on the page grid.
   */
  readonly tone?: "white" | "grey";
}

export function LevelTrack({ content, tone }: LevelTrackProps): ReactNode {
  return (
    <section className={cx(tone === "white" && styles.white, tone === "grey" && styles.grey)}>
      <SectionHead>
        <HeadingFill>
          <SectionTitle size="find">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
        {content.lede !== undefined && <Lede>{content.lede}</Lede>}
      </SectionHead>
      <div className={styles.track}>
        {content.items.map((level) => (
          <LevelRow
            key={level.number}
            level={level}
            levelLabel={content.levelLabel}
          />
        ))}
      </div>
    </section>
  );
}
