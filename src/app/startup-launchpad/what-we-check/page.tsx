import type { Metadata } from "next";
import type { ReactNode } from "react";
import { WhatWeCheckTemplate } from "@/components/templates/WhatWeCheckTemplate";
import { SIGNUP_URL } from "@/config/site";
import { SITE_NAME } from "@/content/metadata";
import { WHAT_WE_CHECK_META, WHAT_WE_CHECK_PAGE } from "@/content/whatWeCheck";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(WHAT_WE_CHECK_META, SITE_NAME);

export default function WhatWeCheckPage(): ReactNode {
  return <WhatWeCheckTemplate content={WHAT_WE_CHECK_PAGE} signupUrl={SIGNUP_URL} />;
}
