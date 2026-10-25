import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./SectionHead.module.css";

export interface SectionHeadProps {
  readonly children: ReactNode;
  readonly align?: "start" | "center";
  readonly className?: string | undefined;
}

/** The heading block at the top of a section: title, plus an optional lede. */
export function SectionHead({ children, align = "center", className }: SectionHeadProps): ReactNode {
  return <div className={cx(styles.head, align === "center" && styles.center, className)}>{children}</div>;
}
