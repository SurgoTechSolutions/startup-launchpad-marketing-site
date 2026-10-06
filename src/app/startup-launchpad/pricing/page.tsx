import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PricingTemplate } from "@/components/templates/PricingTemplate";
import { SIGNUP_URL } from "@/config/site";
import { PRICING_META, SITE_NAME } from "@/content/metadata";
import { PRICING_PAGE } from "@/content/pricingPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(PRICING_META, SITE_NAME);

export default function PricingPage(): ReactNode {
  return <PricingTemplate content={PRICING_PAGE} signupUrl={SIGNUP_URL} />;
}
