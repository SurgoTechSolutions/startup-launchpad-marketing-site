import type { ReactNode } from "react";
import { LegalDocument } from "@/components/organisms/LegalDocument";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import type { LegalPageContent } from "@/types";
import styles from "./LegalTemplate.module.css";

export interface LegalTemplateProps {
  readonly content: LegalPageContent;
  readonly signupUrl: string;
  /** Route of this page, so the header can mark its link as current. */
  readonly currentPath: string;
}

export function LegalTemplate({ content, signupUrl, currentPath }: LegalTemplateProps): ReactNode {
  return (
    <>
      <SiteHeader content={content.header} signupUrl={signupUrl} currentPath={currentPath} />
      <div className={styles.wrap}>
        <main>
          <LegalDocument content={content.document} />
        </main>
        <SiteFooter content={content.footer} />
      </div>
    </>
  );
}
