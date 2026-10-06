const DEFAULT_SIGNUP_URL = "https://launchpad.surgotechsolutions.co.uk/sign-up";

const envSignupUrl = process.env.NEXT_PUBLIC_SIGNUP_URL;

/** Where every sign-up button points. Override with NEXT_PUBLIC_SIGNUP_URL. */
export const SIGNUP_URL: string =
  envSignupUrl !== undefined && envSignupUrl !== "" ? envSignupUrl : DEFAULT_SIGNUP_URL;

export const ROUTES = {
  launchpad: "/startup-launchpad",
  pricing: "/startup-launchpad/pricing",
} as const;
