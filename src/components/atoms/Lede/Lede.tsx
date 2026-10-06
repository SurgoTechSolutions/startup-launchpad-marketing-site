import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Lede.module.css";

export interface LedeProps {
  readonly children: ReactNode;
  readonly className?: string;
}

/** Larger intro paragraph under a heading. */
export function Lede({ children, className }: LedeProps): ReactNode {
  return <p className={cx(styles.lede, className)}>{children}</p>;
}
