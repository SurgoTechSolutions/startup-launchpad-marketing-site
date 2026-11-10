# Free scan video script

A 60–90 second video for the top of the free scan page (`/startup-launchpad/free-scan`). It
replaces the general Launchpad Loom that the page borrows today. Once it is recorded, set its
embed and thumbnail URLs on `FREE_SCAN_HOOK.video` in `src/content/freeScan.ts`.

Order: Hook → Problem → Mechanism → Proof → Offer → Call to action.

| Part | Time | On screen | Say |
|---|---|---|---|
| Hook | 0–8s | Face to camera | "Every app we've checked so far had at least one critical security issue. Yours probably does too." |
| Problem | 8–25s | The stats: 78% leaked keys, 67% open to strangers | "AI tools build fast, and they leave keys in the code and doors unlocked. Bots find those within hours of you going live, not people." |
| Mechanism | 25–45s | Screen: connect GitHub, scan running, dashboard | "Connect your app in two minutes. We check your code and your live site, then write up each issue in plain English, with a prompt you paste into the tool you already build with." |
| Proof | 45–65s | The payment webhook finding, then the fix pasted in | "One founder's payment webhook let anyone mark themselves as a paying customer. One prompt fixed it." |
| Offer | 65–80s | The three offer rows | "Your first five fixes are free, including your two worst security holes. No card, no call." |
| Call to action | 80–90s | Button under the video | "Click 'Get my 5 free fixes' below. If we find nothing, you've lost two minutes." |

Keep the button visible the whole time. Don't wait until the video reaches the offer.
