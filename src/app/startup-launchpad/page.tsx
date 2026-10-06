import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LaunchpadTemplate } from "@/components/templates/LaunchpadTemplate";
import { SIGNUP_URL } from "@/config/site";
import { LAUNCHPAD_PAGE } from "@/content/launchpad";
import { LAUNCHPAD_META, SITE_NAME } from "@/content/metadata";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(LAUNCHPAD_META, SITE_NAME);

export default function StartupLaunchpadPage(): ReactNode {
  return <LaunchpadTemplate content={LAUNCHPAD_PAGE} signupUrl={SIGNUP_URL} />;
}
