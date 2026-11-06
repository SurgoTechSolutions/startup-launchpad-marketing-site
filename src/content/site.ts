import { LOGIN_URL, ROUTES } from "@/config/site";
import type { FooterContent } from "@/types";

/** The main button, the same on every page. The offer behind it is set out on the free scan page. */
export const FREE_FIXES_CTA_LABEL = "Get my 5 free fixes";

/** Header copy shared by both pages. Each page adds its own wordmark link and nav link. */
export const HEADER_BASE = {
  login: { label: "Log in", href: LOGIN_URL },
  ctaLabel: FREE_FIXES_CTA_LABEL,
  menuLabel: "Menu",
} as const;

/** Header links, the same on every page. The current page's link is underlined. Legal pages live in the footer. */
export const NAV_LINKS = [
  { label: "Home", href: ROUTES.launchpad },
  // Hidden for now. The page is still live at its address. Uncomment to bring it back.
  // { label: "Why", href: ROUTES.why },
  { label: "Mission", href: ROUTES.mission },
  { label: "What we check", href: ROUTES.whatWeCheck },
  { label: "Pricing", href: ROUTES.pricing },
  { label: "Verified", href: ROUTES.verified },
] as const;

/** The header title. The lead keeps its trailing space; the accent is drawn in orange. The logo sits before it. */
export const WORDMARK = { lead: "Startup ", accent: "Launchpad", logo: "/images/logo-mark.png" } as const;

export const FOOTER = {
  home: {
    href: ROUTES.launchpad,
    logo: { src: "/images/logo-mark.png", alt: "Startup Launchpad home" },
  },
  columns: [
    { title: "Explore", links: [...NAV_LINKS, { label: "Free scan", href: ROUTES.freeScan }] },
    {
      title: "Legal",
      links: [
        { label: "Terms and conditions", href: ROUTES.terms },
        { label: "Privacy policy", href: ROUTES.privacy },
      ],
    },
  ],
  contact: [
    { kind: "email", label: "Info@SurgoTechSolutions.co.uk", href: "mailto:info@surgotechsolutions.co.uk" },
    { kind: "phone", label: "+44 7407 742219", href: "tel:+447407742219" },
  ],
  text: "©2026 SurgoTech Solutions · All rights reserved · Newcastle upon Tyne, UK",
} as const satisfies FooterContent;
