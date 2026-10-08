import type { ReactNode } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Logo } from "@/components/atoms/Logo";
import type { TrustedByContent } from "@/types";
import styles from "./TrustedBy.module.css";

export interface TrustedByProps {
  readonly content: TrustedByContent;
}

export function TrustedBy({ content }: TrustedByProps): ReactNode {
  return (
    <section className={styles.trust} aria-label={content.eyebrow}>
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <div className={styles.logos}>
        {content.logos.map(({ href, ...logo }) =>
          href === undefined ? (
            <Logo key={logo.src} {...logo} />
          ) : (
            // Opens in a new tab so visitors keep their place. The logo's alt text names the link.
            <a key={logo.src} href={href} target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
              <Logo {...logo} />
            </a>
          ),
        )}
      </div>
    </section>
  );
}
