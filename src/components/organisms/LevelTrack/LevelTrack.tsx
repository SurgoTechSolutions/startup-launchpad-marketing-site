import type { ReactNode } from "react";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { LevelRow } from "@/components/molecules/LevelRow";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { VerifiedContent } from "@/types";
import styles from "./LevelTrack.module.css";

export interface LevelTrackProps {
  readonly content: VerifiedContent["levels"];
}

export function LevelTrack({ content }: LevelTrackProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
        {content.lede !== undefined && <Lede>{content.lede}</Lede>}
      </SectionHead>
      <div className={styles.track}>
        {content.items.map((level) => (
          <LevelRow
            key={level.number}
            level={level}
            levelLabel={content.levelLabel}
            publicLabel={content.publicLabel}
            privateLabel={content.privateLabel}
          />
        ))}
      </div>
    </section>
  );
}
