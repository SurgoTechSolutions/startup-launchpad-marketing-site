import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { Lede } from "@/components/atoms/Lede";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { NameCredit } from "@/components/molecules/NameCredit";
import { RichText } from "@/components/molecules/RichText";
import { VideoEmbed } from "@/components/molecules/VideoEmbed";
import { cx } from "@/lib/cx";
import type { HookContent } from "@/types";
import styles from "./HookBanner.module.css";

export interface HookBannerProps {
  readonly content: HookContent;
  readonly signupUrl: string;
  /** Opens the page on the plain background instead of the band: the title is a large h1 that fills on load, and the video is sized so the button stays on screen. */
  readonly lead?: boolean;
  /** Anything else that belongs in the band, under the button, at full width. */
  readonly children?: ReactNode;
}

/** One big line, centred on a slate band across the full width, as a pause between sections, with the video and button beneath when there are any. */
export function HookBanner({ content, signupUrl, lead = false, children }: HookBannerProps): ReactNode {
  return (
    <section className={cx(styles.band, lead && styles.lead)}>
      <HeadingFill onDark={!lead} allLines onLoad={lead} className={styles.fill}>
        <SectionTitle as={lead ? "h1" : "h2"} size="find" className={styles.title}>
          <RichText content={content.title} />
        </SectionTitle>
      </HeadingFill>
      {content.subtitle !== undefined && <Lede className={styles.subtitle}>{content.subtitle}</Lede>}
      {content.video !== undefined && (
        <div className={styles.media}>
          <VideoEmbed video={content.video} className={styles.video} />
          {content.presenter !== undefined && (
            <NameCredit credit={content.presenter} onDark={!lead} className={styles.presenter} />
          )}
        </div>
      )}
      {content.ctaLabel !== undefined && (
        <div className={styles.cta}>
          <Button href={signupUrl} onDark={!lead}>{content.ctaLabel}</Button>
          {content.note !== undefined && <small className={styles.note}>{content.note}</small>}
        </div>
      )}
      {children !== undefined && <div className={styles.extra}>{children}</div>}
    </section>
  );
}
