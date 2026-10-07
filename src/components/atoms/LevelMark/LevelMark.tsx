import Image from "next/image";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { Metal } from "@/types";
import styles from "./LevelMark.module.css";

/** The SVG artwork's viewBox is 80.97 by 101.81. */
const ASPECT = 80.97 / 101.81;

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
      src={`/images/level-${metal}.svg`}
      alt={label ?? ""}
      width={Math.round(height * ASPECT)}
      height={height}
      className={cx(styles.mark, lapsed && styles.lapsed)}
      // Vector artwork: nothing to resize, so serve the file as it is.
      unoptimized
    />
  );
}
