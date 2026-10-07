import Image from "next/image";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { Metal } from "@/types";
import styles from "./LevelMark.module.css";

/** Source artwork is 186 by 240. */
const ASPECT = 186 / 240;

export interface LevelMarkProps {
  readonly metal: Metal;
  /** Rendered height in pixels. Width follows the artwork's proportions. */
  readonly height: number;
  /** Grey it out, for a level that has been lost. */
  readonly lapsed?: boolean;
  /** Accessible name. Leave out when the level is written next to the mark. */
  readonly label?: string;
}

/** The Launchpad Verified mark in the level's metal. */
export function LevelMark({ metal, height, lapsed = false, label }: LevelMarkProps): ReactNode {
  return (
    <Image
      src={`/images/level-${metal}.webp`}
      alt={label ?? ""}
      width={Math.round(height * ASPECT)}
      height={height}
      className={cx(styles.mark, lapsed && styles.lapsed)}
    />
  );
}
