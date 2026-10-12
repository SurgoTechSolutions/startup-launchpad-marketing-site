import Image from "next/image";
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
  /** Logo image shown before the name. Decorative, as the name says the same thing. */
  readonly logo?: string | undefined;
  readonly className?: string | undefined;
}

/** The logo and name in the header. */
export function Wordmark({ href, lead, accent, logo, className }: WordmarkProps): ReactNode {
  const classes = cx(styles.mark, className);
  const content = (
    <>
      {logo !== undefined && (
        <Image src={logo} alt="" width={64} height={64} className={styles.logo} priority />
      )}
      <span>
        {lead}
        <span className={styles.accent}>{accent}</span>
      </span>
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
