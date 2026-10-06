# Startup Launchpad

Next.js 15 (App Router) build of the Startup Launchpad mock-ups in `design/`, hosted on AWS Amplify.

## Routes

- `/startup-launchpad` main page
- `/startup-launchpad/pricing` pricing page
- `/` redirects to `/startup-launchpad`

## Scripts

- `npm run dev` starts the dev server.
- `npm run check` runs `tsc --noEmit` and ESLint (next/core-web-vitals plus typescript-eslint strict type-checked).
- `npm run build` makes a production build. Both pages are static.
- `npm run extract-assets` pulls the base64 images out of `design/*.html` into `public/images/` and writes stripped copies to `design/stripped/`.

## Environment

See `.env.example`. Both are optional.

- `NEXT_PUBLIC_SIGNUP_URL` is where every sign-up button points. Defaults to `https://launchpad.surgotechsolutions.co.uk/sign-up`.
- `NEXT_PUBLIC_SITE_URL` is the public origin for canonical and Open Graph URLs. Defaults to `https://surgotechsolutions.co.uk`.

## Structure

- `src/content/` holds all copy as typed constants. People and quotes are each defined once and referenced by key.
- `src/types/` holds the content and section types.
- `src/components/` follows atomic design: atoms, molecules, organisms, templates. Lint rules stop a layer importing from one above it.
- `src/hooks/` holds the animation hooks. Every animation renders its final state on the server and respects reduced motion.
- `src/app/` pages only pass content to a template.

## Notes

- Next.js is pinned to 15.x because Amplify Hosting supports Next 12 to 15. Do not upgrade to 16.
- The Open Graph image is generated at build time with Comfortaa Bold from `src/assets/fonts/` (SIL Open Font License, see `OFL.txt`).
