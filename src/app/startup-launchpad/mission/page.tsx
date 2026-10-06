import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MissionTemplate } from "@/components/templates/MissionTemplate";
import { SIGNUP_URL } from "@/config/site";
import { SITE_NAME } from "@/content/metadata";
import { MISSION_META, MISSION_PAGE } from "@/content/mission";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(MISSION_META, SITE_NAME);

export default function MissionPage(): ReactNode {
  return <MissionTemplate content={MISSION_PAGE} signupUrl={SIGNUP_URL} />;
}
