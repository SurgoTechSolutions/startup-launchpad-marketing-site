import missionTeam from "@/assets/images/mission-team.webp";
import { ROUTES } from "@/config/site";
import type { FinalCtaContent, MissionContent, MissionPageContent, PageMeta } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { resolveQuote } from "./quotes";
import { FOOTER } from "./site";

export const MISSION = {
  title: ["We want more ", { highlight: "startups to succeed" }, "."],
  lede: "So we put professional-grade security in founders' hands, at a price a first product can afford.",
  photo: {
    src: missionTeam,
    alt: "The Startup Launchpad co-founders presenting at an event, with the Startup Launchpad logo on the screen behind them.",
  },
  paragraphs: [
    "Security is priced for companies that have already made it. Pen tests and contractors cost thousands. So many founders launch without either, and find out what they missed when someone else does.",
    "We don't think a security gap should be what stops a good idea. So we built Startup Launchpad to give every founder the checks a funded company would pay for. Scan your codebase, see what's exposed in plain English, and fix it with a prompt you paste straight into Claude. It's self-serve, and your first scan is free, so you know how many issues you have before you pay.",
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
