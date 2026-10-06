import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalTemplate } from "@/components/templates/LegalTemplate";
import { SIGNUP_URL } from "@/config/site";
import { SITE_NAME } from "@/content/metadata";
import { TERMS_META, TERMS_PAGE } from "@/content/terms";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(TERMS_META, SITE_NAME);

export default function TermsPage(): ReactNode {
  return <LegalTemplate content={TERMS_PAGE} signupUrl={SIGNUP_URL} currentPath={TERMS_META.path} />;
}
