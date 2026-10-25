import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { RichText } from "@/components/molecules/RichText";
import { VideoEmbed } from "@/components/molecules/VideoEmbed";
import type { HookContent } from "@/types";
import styles from "./HookBanner.module.css";

export interface HookBannerProps {
  readonly content: HookContent;
  readonly signupUrl: string;
}

/** One big line, centred on a slate band across the full width, as a pause between sections, with the video and button beneath when there are any. */
export function HookBanner({ content, signupUrl }: HookBannerProps): ReactNode {
  return (
    <section className={styles.band}>
      <HeadingFill onDark allLines className={styles.fill}>
        <SectionTitle size="find" className={styles.title}>
          <RichText content={content.title} />
        </SectionTitle>
      </HeadingFill>
      {content.video !== undefined && (
        <div className={styles.media}>
          <VideoEmbed video={content.video} className={styles.video} />
          {content.presenter !== undefined && (
            <p className={styles.presenter}>
              <b className={styles.presenterName}>{content.presenter.name}</b>
              {content.presenter.role}
            </p>
          )}
        </div>
      )}
      {content.ctaLabel !== undefined && (
        <div className={styles.cta}>
          <Button href={signupUrl} onDark>{content.ctaLabel}</Button>
          {content.note !== undefined && <small className={styles.note}>{content.note}</small>}
        </div>
      )}
    </section>
  );
}
