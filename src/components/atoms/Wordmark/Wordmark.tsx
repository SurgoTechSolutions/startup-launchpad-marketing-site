import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Wordmark.module.css";

export interface WordmarkProps {
  readonly href: string;
  /** The plain part of the name, e.g. "Surgo". */
  readonly lead: string;
  /** The orange part of the name, e.g. "Tech". */
  readonly accent: string;
}

/** The text logo in the header. */
export function Wordmark({ href, lead, accent }: WordmarkProps): ReactNode {
  const content = (
    <>
      {lead}
      <span className={styles.accent}>{accent}</span>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={styles.mark}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={styles.mark}>
      {content}
    </a>
  );
}
