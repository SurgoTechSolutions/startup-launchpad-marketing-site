import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

export interface EyebrowProps {
  readonly children: ReactNode;
}

export function Eyebrow({ children }: EyebrowProps): ReactNode {
  return <span className={styles.eyebrow}>{children}</span>;
}
