import type { Metadata } from "next";
import type { ReactNode } from "react";
import { WhyTemplate } from "@/components/templates/WhyTemplate";
import { SIGNUP_URL } from "@/config/site";
import { SITE_NAME } from "@/content/metadata";
import { WHY_META, WHY_PAGE } from "@/content/why";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(WHY_META, SITE_NAME);

export default function WhyPage(): ReactNode {
  return <WhyTemplate content={WHY_PAGE} signupUrl={SIGNUP_URL} />;
}
