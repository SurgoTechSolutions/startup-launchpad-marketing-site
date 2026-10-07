import { ROUTES } from "@/config/site";
import type { FinalCtaContent, PageMeta, VerifiedContent, VerifiedPageContent } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { FOOTER } from "./site";

export const VERIFIED = {
  intro: {
    status: "Coming soon for subscribers",
    title: ["Launchpad ", { highlight: "Verified" }],
    lede: "A live, public check that your app meets published security rules. Earn it, keep it, and show it to the customers and investors who ask.",
  },
  levels: {
    title: ["Five levels. ", { highlight: "Quick wins first." }],
    lede: "The first steps take minutes. The top level takes a month of keeping things right. The last three earn a public badge.",
    levelLabel: "Level",
    timeLabel: "Typically",
    publicLabel: "Public badge",
    privateLabel: "Dashboard only",
    items: [
      {
        number: "1",
        name: "Aware",
        tagline: "You know where you stand.",
        rules: ["First scan complete", "Every critical finding opened and read"],
        time: "Minutes",
        rings: null,
      },
      {
        number: "2",
        name: "Secrets clean",
        tagline: "The quickest, most dangerous fixes done.",
        rules: [
          "No live secrets in your code or its history",
          "A privacy policy on your live site",
        ],
        time: "An hour or two",
        rings: null,
      },
      {
        number: "3",
        name: "Baseline",
        tagline: "No open doors.",
        rules: ["No open critical security findings", "Valid HTTPS on your live site"],
        time: "A day or two",
        rings: 1,
      },
      {
        number: "4",
        name: "Hardened",
        tagline: "Defended.",
        rules: [
          "No open high-severity security findings",
          "No dependencies with known critical or high vulnerabilities",
          "Security headers in place on your live site",
        ],
        time: "A week or two",
        rings: 2,
      },
      {
        number: "5",
        name: "Assured",
        tagline: "And kept that way.",
        rules: [
          "Hardened held for 30 days in a row",
          "Every medium security finding fixed or accepted with a reason",
          "No open critical or high findings in accessibility, reliability or cost",
          "No tracking before cookie consent",
          "No more than 3 accepted risks, each reviewed every 90 days",
        ],
        time: "30 days or more",
        rings: 3,
      },
    ],
  },
  badge: {
    title: ["Show it where ", { highlight: "it counts" }],
    lede: "Add the badge to your site footer or README. It links to a public page anyone can check, showing your level and when it was last verified. Never your findings.",
    example: { label: "Launchpad verified", level: "Hardened", date: "3 Oct 2026", rings: 2 },
    lapsed: { label: "Launchpad verified", level: "Lapsed", date: "4 Nov 2026", rings: 0 },
    lapsedNote: "If a level is lost, the badge goes grey and says so. A badge that can lapse is one people can trust.",
    page: {
      caption: "What your verification page shows",
      heading: "Hardened",
      rows: [
        { label: "Held since", value: "3 Oct 2026" },
        { label: "Last verified", value: "2 hours ago" },
        { label: "Findings marked not applicable", value: "1" },
      ],
      scope:
        "Automated continuous scan of code and live site. Not a certification or a penetration test.",
    },
  },
  rules: {
    title: ["The ", { highlight: "rules" }],
    groups: [
      {
        title: "Keeping your level",
        items: [
          "Your level is re-checked on every scan of your production branch.",
          "A new critical finding gives you 7 days to fix it. A new high finding, or a newly disclosed dependency vulnerability, gives you 14.",
          "While you fix it, your page says so openly, with the days left.",
          "Run out of time and you drop to the level you still meet. Fix it and the level comes back. Assured restarts its 30 days.",
          "No successful scan for 7 days and your badge shows Not currently verified.",
        ],
      },
      {
        title: "Fair for everyone",
        items: [
          "Findings you mark not applicable are always counted on your public page.",
          "Only the branch you deploy from counts.",
          "Housekeeping, SEO, low and info findings never block a level.",
          "AI-generated findings count, and can be dismissed with a reason that shows publicly.",
          "Public badges are for subscribers, because a badge needs ongoing scanning to mean anything.",
        ],
      },
    ],
    note: "Launchpad Verified is an automated check against published rules. It is not a certification, an audit or a penetration test.",
  },
} as const satisfies VerifiedContent;

export const VERIFIED_FINAL_CTA = {
  title: ["Start at ", { highlight: "level one" }, " today."],
  lede: "Your first scan gets you to Aware in minutes.",
  ctaLabel: "Scan my code for free",
} as const satisfies FinalCtaContent;

export const VERIFIED_META = {
  title: "Launchpad Verified",
  description:
    "A live, public check that your app meets published security rules. Five levels, quick wins first, and a badge you can show customers and investors.",
  path: ROUTES.verified,
} as const satisfies PageMeta;

export const VERIFIED_PAGE = {
  header: LAUNCHPAD_HEADER,
  verified: VERIFIED,
  finalCta: VERIFIED_FINAL_CTA,
  footer: FOOTER,
} as const satisfies VerifiedPageContent;
