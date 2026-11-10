import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { StickyBar } from "@/components/atoms/StickyBar";
import { Wordmark } from "@/components/atoms/Wordmark";
import { cx } from "@/lib/cx";
import type { HeaderContent } from "@/types";
import styles from "./SiteHeader.module.css";

export interface SiteHeaderProps {
  readonly content: HeaderContent;
  readonly signupUrl: string;
  /** Route of the page being viewed, so its link can be marked as current. */
  readonly currentPath: string;
  /** Just the name, not linked, and the button: no page links, no log in, no menu. For landing pages that should keep people on the page. */
  readonly minimal?: boolean;
}

/**
 * The site header. It pins to the top and shrinks into a white bar as the page scrolls.
 * On narrower screens the links move into a burger menu, built on details and summary
 * so it opens and closes without JavaScript.
 */
export function SiteHeader({ content, signupUrl, currentPath, minimal = false }: SiteHeaderProps): ReactNode {
  if (minimal) {
    return (
      <StickyBar className={styles.bar}>
        <div className={cx(styles.inner, styles.minimal)}>
          <Wordmark
            lead={content.wordmark.lead}
            accent={content.wordmark.accent}
            logo={content.wordmark.logo}
            className={styles.wordmark}
          />
          <Button href={signupUrl} className={styles.cta}>
            {content.ctaLabel}
          </Button>
        </div>
      </StickyBar>
    );
  }

  const links = content.navLinks.map((link) => (
    <Button key={link.href} href={link.href} variant="nav" current={link.href === currentPath}>
      {link.label}
    </Button>
  ));

  return (
    <StickyBar className={styles.bar}>
      <div className={styles.inner}>
        <Wordmark {...content.wordmark} className={styles.wordmark} />
        <nav className={styles.nav} aria-label="Main">
          <div className={styles.links}>{links}</div>
          <Button href={content.login.href} variant="nav" className={styles.login}>
            {content.login.label}
          </Button>
          <Button href={signupUrl} className={styles.cta}>
            {content.ctaLabel}
          </Button>
          <details className={styles.menu}>
            <summary className={styles.burger} aria-label={content.menuLabel}>
              <span className={styles.bars} aria-hidden="true" />
            </summary>
            <div className={styles.panel}>
              {links}
              <Button href={content.login.href} variant="nav">
                {content.login.label}
              </Button>
              <Button href={signupUrl} className={styles.panelCta}>
                {content.ctaLabel}
              </Button>
            </div>
          </details>
        </nav>
      </div>
    </StickyBar>
  );
}
