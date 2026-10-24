import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { CheckIcon } from "@/components/atoms/CheckIcon";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import type { CheckSummaryContent } from "@/types";
import styles from "./CheckSummary.module.css";

export interface CheckSummaryProps {
  readonly content: CheckSummaryContent;
}

/** Every area a scan covers, one tile and icon each, with a link to the full breakdown. */
export function CheckSummary({ content }: CheckSummaryProps): ReactNode {
  return (
    <section className={styles.band}>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <ul className={styles.grid}>
        {content.checks.map((check) => (
          <li key={check.kind} className={styles.check}>
            <span className={styles.icon}>
              <CheckIcon kind={check.kind} />
            </span>
            {check.label}
          </li>
        ))}
      </ul>
      <p className={styles.more}>
        <Button href={content.moreLink.href} variant="slide">
          {content.moreLink.label}
        </Button>
      </p>
    </section>
  );
}
