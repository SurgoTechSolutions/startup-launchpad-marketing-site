import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalTemplate } from "@/components/templates/LegalTemplate";
import { SIGNUP_URL } from "@/config/site";
import { SITE_NAME } from "@/content/metadata";
import { PRIVACY_META, PRIVACY_PAGE } from "@/content/privacy";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(PRIVACY_META, SITE_NAME);

export default function PrivacyPage(): ReactNode {
  return <LegalTemplate content={PRIVACY_PAGE} signupUrl={SIGNUP_URL} currentPath={PRIVACY_META.path} />;
}
