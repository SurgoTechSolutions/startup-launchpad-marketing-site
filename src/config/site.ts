const DEFAULT_SIGNUP_URL = "https://launchpad.surgotechsolutions.co.uk/sign-up";

const envSignupUrl = process.env.NEXT_PUBLIC_SIGNUP_URL;

/** Where every sign-up button points. Override with NEXT_PUBLIC_SIGNUP_URL. */
export const SIGNUP_URL: string =
  envSignupUrl !== undefined && envSignupUrl !== "" ? envSignupUrl : DEFAULT_SIGNUP_URL;

const DEFAULT_SITE_URL = "https://surgotechsolutions.co.uk";
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

/** Public origin the pages are served from. Used for canonical and Open Graph URLs. */
export const SITE_URL: string =
  envSiteUrl !== undefined && envSiteUrl !== "" ? envSiteUrl : DEFAULT_SITE_URL;

export const ROUTES = {
  launchpad: "/startup-launchpad",
  pricing: "/startup-launchpad/pricing",
  privacy: "/startup-launchpad/privacy",
} as const;
