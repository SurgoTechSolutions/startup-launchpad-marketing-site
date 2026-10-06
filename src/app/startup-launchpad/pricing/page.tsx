import type { ReactNode } from "react";
import { PricingTemplate } from "@/components/templates/PricingTemplate";
import { SIGNUP_URL } from "@/config/site";
import { PRICING_PAGE } from "@/content/pricingPage";

export default function PricingPage(): ReactNode {
  return <PricingTemplate content={PRICING_PAGE} signupUrl={SIGNUP_URL} />;
}
