import type { ReactNode } from "react";
import { InView } from "@/components/atoms/InView";
import { cx } from "@/lib/cx";
import styles from "./HeadingFill.module.css";

export interface HeadingFillProps {
  readonly children: ReactNode;
  /** On a navy band, so the phrase starts white instead of ink. */
  readonly onDark?: boolean;
  /**
   * For a heading on screen when the page opens, such as a page title: fills as the page loads
   * instead of waiting for a scroll, so it never shows orange, then plain, then orange again.
   */
  readonly onLoad?: boolean;
  /** Fills every line of a wrapped phrase at the same time, instead of running on line by line. */
  readonly allLines?: boolean;
  readonly className?: string | undefined;
}

/**
 * Wraps a heading so its orange phrase fills in from the left, starting from the heading's own
 * colour: the first time it scrolls into view, or as the page loads. Without JavaScript or with
 * reduced motion the phrase is simply orange.
 */
export function HeadingFill({
  children,
  onDark = false,
  onLoad = false,
  allLines = false,
  className,
}: HeadingFillProps): ReactNode {
  const classes = cx(styles.fill, onDark && styles.dark, allLines && styles.lines, className);
  if (onLoad) return <div className={cx(classes, styles.load)}>{children}</div>;
  return (
    <InView className={classes} threshold={0.6}>
      {children}
    </InView>
  );
}
