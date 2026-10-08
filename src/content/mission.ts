import { ROUTES } from "@/config/site";
import type { FinalCtaContent, MissionContent, MissionPageContent, PageMeta } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { resolveQuote } from "./quotes";
import { FOOTER } from "./site";

export const MISSION = {
  eyebrow: "Our mission",
  title: ["Great companies shouldn't need a ", { highlight: "security budget" }, " to launch."],
  statement:
    "We want more startups to succeed. So we put professional-grade security in founders' hands, at a price a first product can afford. Build it secure. Launch it with confidence.",
  paragraphs: [
    "Proper security is priced for companies that have already made it: pen tests that cost thousands, contractors billed by the day. So most founders launch without it and hope for the best.",
    "We think that's backwards. The people with the best ideas aren't always the ones with the deepest pockets, and a security gap shouldn't be what stops them.",
    "Startup Launchpad puts serious security checks in the hands of the people doing the building. It's self-serve, explained in plain English, and priced for a first product.",
  ],
  valuesTitle: ["How we ", { highlight: "lower the barrier" }],
  values: [
    { title: "Low cost", body: "Priced for a first product, not an enterprise." },
    { title: "Self-serve", body: "You run it yourself, whenever you like." },
    { title: "Plain English", body: "Every finding says what's wrong and how to fix it." },
  ],
} as const satisfies MissionContent;

export const MISSION_FINAL_CTA = {
  title: ["Build something secure, and ", { highlight: "launch it with confidence" }, "."],
  ctaLabel: "Scan my code for free",
  quote: resolveQuote("richardBuilders"),
} as const satisfies FinalCtaContent;

export const MISSION_META = {
  title: "Our Mission",
  description:
    "We want more startups to succeed. So we put professional-grade security in founders' hands, at a price a first product can afford.",
  path: ROUTES.mission,
} as const satisfies PageMeta;

export const MISSION_PAGE = {
  header: LAUNCHPAD_HEADER,
  mission: MISSION,
  finalCta: MISSION_FINAL_CTA,
  footer: FOOTER,
} as const satisfies MissionPageContent;
