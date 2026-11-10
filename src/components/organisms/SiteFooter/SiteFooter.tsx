import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactIcon } from "@/components/atoms/ContactIcon";
import { cx } from "@/lib/cx";
import type { FooterContent } from "@/types";
import styles from "./SiteFooter.module.css";

export interface SiteFooterProps {
  readonly content: FooterContent;
  /** Just the legal links and the bottom line: no logo, page links or contact details. For landing pages that should keep people on the page. */
  readonly minimal?: boolean;
}

/** Logo, page links in columns, contact details, and a line along the bottom. */
export function SiteFooter({ content, minimal = false }: SiteFooterProps): ReactNode {
  if (minimal) {
    const legal = content.columns.find((column) => column.title === "Legal");
    return (
      <footer className={cx(styles.footer, styles.minimal)}>
        {legal !== undefined && (
          <nav aria-label={legal.title}>
            <ul className={styles.inline}>
              {legal.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <p className={styles.bottom}>{content.text}</p>
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Link href={content.home.href} className={styles.logo}>
          <Image src={content.home.logo.src} alt={content.home.logo.alt} width={56} height={56} />
        </Link>
        {content.columns.map((column) => (
          <nav key={column.title} className={styles.column} aria-label={column.title}>
            <span className={styles.heading}>{column.title}</span>
            <ul className={styles.list}>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <address className={styles.contact}>
          {content.contact.map((item) => (
            <a key={item.href} href={item.href}>
              <ContactIcon kind={item.kind} className={styles.icon} />
              {item.label}
            </a>
          ))}
        </address>
      </div>
      <p className={styles.bottom}>{content.text}</p>
    </footer>
  );
}
