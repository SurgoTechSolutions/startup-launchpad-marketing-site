import type { ReactNode } from "react";
import styles from "./Kbd.module.css";

export interface KbdProps {
  readonly children: ReactNode;
}

export function Kbd({ children }: KbdProps): ReactNode {
  return <kbd className={styles.kbd}>{children}</kbd>;
}
