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
        {content.logos.map((logo) => (
          <Logo key={logo.src} {...logo} />
        ))}
      </div>
    </section>
  );
}
