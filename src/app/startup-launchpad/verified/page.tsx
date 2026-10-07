import type { Metadata } from "next";
import type { ReactNode } from "react";
import { VerifiedTemplate } from "@/components/templates/VerifiedTemplate";
import { SIGNUP_URL } from "@/config/site";
import { SITE_NAME } from "@/content/metadata";
import { VERIFIED_META, VERIFIED_PAGE } from "@/content/verified";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(VERIFIED_META, SITE_NAME);

export default function VerifiedPage(): ReactNode {
  return <VerifiedTemplate content={VERIFIED_PAGE} signupUrl={SIGNUP_URL} />;
}
