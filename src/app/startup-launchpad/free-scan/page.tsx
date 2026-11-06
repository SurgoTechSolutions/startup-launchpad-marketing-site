import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FreeScanTemplate } from "@/components/templates/FreeScanTemplate";
import { SIGNUP_URL } from "@/config/site";
import { FREE_SCAN_META, FREE_SCAN_PAGE } from "@/content/freeScan";
import { SITE_NAME } from "@/content/metadata";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(FREE_SCAN_META, SITE_NAME);

export default function FreeScanPage(): ReactNode {
  return <FreeScanTemplate content={FREE_SCAN_PAGE} signupUrl={SIGNUP_URL} />;
}
