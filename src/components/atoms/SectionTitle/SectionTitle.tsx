import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./SectionTitle.module.css";

/**
 * Heading scales from the mock-up. "base" keeps the default h1 or h2 size.
 * The others match the mock-up classes of the same name (stats-title, try-title and so on).
 */
export type SectionTitleSize =
  | "base"
  | "stats"
  | "try"
  | "spot"
  | "every"
  | "find"
  | "explain"
  | "big";

export interface SectionTitleProps {
  readonly children: ReactNode;
  readonly as?: "h1" | "h2";
  readonly size?: SectionTitleSize;
  readonly className?: string;
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  size = "base",
  className,
}: SectionTitleProps): ReactNode {
  return <Tag className={cx(styles[size], className)}>{children}</Tag>;
}
