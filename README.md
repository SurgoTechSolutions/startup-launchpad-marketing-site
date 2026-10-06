# Startup Launchpad

Next.js 15 (App Router) build of the Startup Launchpad mock-up, hosted on AWS Amplify.

## Routes

- `/startup-launchpad`
- `/startup-launchpad/pricing`

## Scripts

- `npm run dev` starts the dev server.
- `npm run check` runs `tsc --noEmit` and ESLint.
- `npm run build` makes a production build.
- `npm run extract-assets` pulls the base64 images out of `design/*.html` into `public/images/` and writes stripped copies to `design/stripped/`.

## Notes

- Next.js is pinned to 15.x because Amplify Hosting supports Next 12 to 15. Do not upgrade to 16.
- `NEXT_PUBLIC_SIGNUP_URL` overrides the sign-up link. See `.env.example`.
