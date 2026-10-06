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
        {content.navLinks.map((link) => (
          <Button key={link.href} href={link.href} variant="underline">
            {link.label}
          </Button>
        ))}
        <Button href={signupUrl}>{content.ctaLabel}</Button>
      </nav>
    </header>
  );
}
