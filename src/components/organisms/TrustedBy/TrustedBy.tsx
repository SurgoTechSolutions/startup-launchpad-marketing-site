import type { ReactNode } from "react";
import { Logo } from "@/components/atoms/Logo";
import { cx } from "@/lib/cx";
import type { TrustedByContent } from "@/types";
import styles from "./TrustedBy.module.css";

export interface TrustedByProps {
  readonly content: TrustedByContent;
  /** Show the logos without their links, on pages that should keep people on the page. */
  readonly unlinked?: boolean;
}

/** Logos this much wider than tall get a row of their own on phones. */
const WIDE_RATIO = 4;

export function TrustedBy({ content, unlinked = false }: TrustedByProps): ReactNode {
  return (
    <section className={styles.trust} aria-label={content.label}>
      <div className={styles.logos}>
        {content.logos.map(({ href, ...logo }) => {
          const className = cx(
            styles.item,
            logo.intrinsicWidth / logo.intrinsicHeight > WIDE_RATIO && styles.wide,
          );
          return href === undefined || unlinked ? (
            <span key={logo.src} className={className}>
              <Logo {...logo} />
            </span>
          ) : (
            // Opens in a new tab so visitors keep their place. The logo's alt text names the link.
            <a
              key={logo.src}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cx(className, styles.logoLink)}
            >
              <Logo {...logo} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
