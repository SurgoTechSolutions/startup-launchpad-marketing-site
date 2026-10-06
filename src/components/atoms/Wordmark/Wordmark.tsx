import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Wordmark.module.css";

export interface WordmarkProps {
  readonly href: string;
  /** The plain part of the name, including any trailing space, e.g. "Startup ". */
  readonly lead: string;
  /** The orange part of the name, e.g. "Launchpad". */
  readonly accent: string;
  readonly className?: string | undefined;
}

/** The text logo in the header. */
export function Wordmark({ href, lead, accent, className }: WordmarkProps): ReactNode {
  const classes = cx(styles.mark, className);
  const content = (
    <>
      {lead}
      <span className={styles.accent}>{accent}</span>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}
