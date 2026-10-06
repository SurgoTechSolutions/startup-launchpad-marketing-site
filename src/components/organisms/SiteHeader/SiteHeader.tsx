import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Wordmark } from "@/components/atoms/Wordmark";
import type { HeaderContent } from "@/types";
import styles from "./SiteHeader.module.css";

export interface SiteHeaderProps {
  readonly content: HeaderContent;
  readonly signupUrl: string;
}

export function SiteHeader({ content, signupUrl }: SiteHeaderProps): ReactNode {
  return (
    <header className={styles.header}>
      <Wordmark {...content.wordmark} />
      <nav className={styles.nav} aria-label="Main">
        <Button href={content.navLink.href} variant="underline">
          {content.navLink.label}
        </Button>
        <Button href={signupUrl}>{content.ctaLabel}</Button>
      </nav>
    </header>
  );
}
