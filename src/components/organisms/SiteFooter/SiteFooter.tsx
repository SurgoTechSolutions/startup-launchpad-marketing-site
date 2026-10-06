import type { ReactNode } from "react";
import type { FooterContent } from "@/types";
import styles from "./SiteFooter.module.css";

export interface SiteFooterProps {
  readonly content: FooterContent;
}

export function SiteFooter({ content }: SiteFooterProps): ReactNode {
  return <footer className={styles.footer}>{content.text}</footer>;
}
