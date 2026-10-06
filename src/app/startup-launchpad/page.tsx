import type { ReactNode } from "react";
import { LaunchpadTemplate } from "@/components/templates/LaunchpadTemplate";
import { SIGNUP_URL } from "@/config/site";
import { LAUNCHPAD_PAGE } from "@/content/launchpad";

export default function StartupLaunchpadPage(): ReactNode {
  return <LaunchpadTemplate content={LAUNCHPAD_PAGE} signupUrl={SIGNUP_URL} />;
}
