import Link from "next/link";
import type { ReactNode } from "react";
import type { FooterContent } from "@/types";
import styles from "./SiteFooter.module.css";

export interface SiteFooterProps {
  readonly content: FooterContent;
}

export function SiteFooter({ content }: SiteFooterProps): ReactNode {
  return (
    <footer className={styles.footer}>
      <span>{content.text}</span>
      {content.contact !== undefined && (
        <address className={styles.contact}>
          {content.contact.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </address>
      )}
      {content.links !== undefined && (
        <nav className={styles.links} aria-label="Legal">
          {content.links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </footer>
  );
}
