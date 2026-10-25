import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { InView } from "@/components/atoms/InView";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import type { DashboardContent } from "@/types";
import { DashGrid } from "./DashGrid";
import styles from "./DashboardShowcase.module.css";

export interface DashboardShowcaseProps {
  readonly content: DashboardContent;
  readonly signupUrl: string;
}

export function DashboardShowcase({ content, signupUrl }: DashboardShowcaseProps): ReactNode {
  return (
    <section className={styles.every}>
      <div className={styles.stage}>
        <HeadingFill>
          <SectionTitle size="every">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
        <InView className={styles.window} threshold={0.15}>
          <div className={styles.dash} role="img" aria-label={content.label}>
            <div className={styles.top}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" />
                <path d="M5 17a3 3 0 0 1 3-3h11M9 8h6" />
              </svg>
              <div>
                <span className={styles.repo}>{content.repo}</span>
                <span className={styles.pill}>{content.badge}</span>
              </div>
            </div>
            <DashGrid tiles={content.tiles} />
          </div>
        </InView>
      </div>
      <InView className={styles.foot} threshold={0.4}>
        <QuoteCard variant="rule" text={content.quote.text} person={content.quote.person} />
        <Button href={signupUrl} className={styles.cta}>
          {content.ctaLabel}
        </Button>
      </InView>
    </section>
  );
}
