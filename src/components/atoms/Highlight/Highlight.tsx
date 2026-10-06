import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Highlight.module.css";

export interface HighlightProps {
  readonly children: ReactNode;
  /** Keeps the highlighted phrase on one line, as in the founder story title. */
  readonly noWrap?: boolean;
}

/** The orange emphasised phrase used in headings. */
export function Highlight({ children, noWrap = false }: HighlightProps): ReactNode {
  return <em className={cx(styles.highlight, noWrap && styles.noWrap)}>{children}</em>;
}
