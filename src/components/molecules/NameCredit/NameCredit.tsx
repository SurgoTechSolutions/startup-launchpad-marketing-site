import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import type { Credit } from "@/types";
import styles from "./NameCredit.module.css";

export interface NameCreditProps {
  readonly credit: Credit;
  /** White text, for navy bands. */
  readonly onDark?: boolean;
  readonly className?: string | undefined;
}

/** A name in bold over a role. With an href, the name links to their profile in a new tab. */
export function NameCredit({ credit, onDark = false, className }: NameCreditProps): ReactNode {
  return (
    <p className={cx(styles.credit, onDark && styles.onDark, className)}>
      {credit.href === undefined ? (
        <b className={styles.name}>{credit.name}</b>
      ) : (
        // Opens in a new tab so visitors keep their place on the site.
        <a href={credit.href} target="_blank" rel="noopener noreferrer" className={styles.name}>
          {credit.name}
          <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
        </a>
      )}
      {credit.role}
    </p>
  );
}
