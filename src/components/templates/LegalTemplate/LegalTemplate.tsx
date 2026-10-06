import type { ReactNode } from "react";
import { LegalDocument } from "@/components/organisms/LegalDocument";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import type { LegalPageContent } from "@/types";
import styles from "./LegalTemplate.module.css";

export interface LegalTemplateProps {
  readonly content: LegalPageContent;
  readonly signupUrl: string;
}

export function LegalTemplate({ content, signupUrl }: LegalTemplateProps): ReactNode {
  return (
    <div className={styles.wrap}>
      <SiteHeader content={content.header} signupUrl={signupUrl} />
      <main>
        <LegalDocument content={content.document} />
      </main>
      <SiteFooter content={content.footer} />
    </div>
  );
}
