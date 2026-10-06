import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Avatar } from "@/components/atoms/Avatar";
import { Button } from "@/components/atoms/Button";
import { CritBadge } from "@/components/atoms/CritBadge";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Highlight } from "@/components/atoms/Highlight";
import { Kbd } from "@/components/atoms/Kbd";
import { Lede } from "@/components/atoms/Lede";
import { Logo } from "@/components/atoms/Logo";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Wordmark } from "@/components/atoms/Wordmark";
import { ROUTES, SIGNUP_URL } from "@/config/site";

// Development-only gallery for checking atoms against the mock-up. Removed before launch.
export default function AtomsPreviewPage(): ReactNode {
  if (process.env.NODE_ENV === "production") notFound();

  const row = { display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" } as const;

  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px", display: "grid", gap: 40 }}>
      <div style={row}>
        <Wordmark href="https://surgotechsolutions.co.uk" lead="Surgo" accent="Tech" />
        <Button href={ROUTES.pricing} variant="underline">Pricing</Button>
        <Button href={SIGNUP_URL}>Scan my code free</Button>
      </div>
      <div style={row}>
        <Eyebrow>Startup Launchpad</Eyebrow>
        <Lede>Built with Lovable, Bolt, Replit, v0, Cursor or Claude? Lede paragraph sample.</Lede>
      </div>
      <SectionTitle as="h1">
        You built something real. Do you know it&apos;s <Highlight>secure</Highlight>?
      </SectionTitle>
      <SectionTitle size="stats">
        <Highlight>100%</Highlight> of the codebases we&apos;ve scanned had
        <br />
        <CritBadge>critical security issues</CritBadge>
      </SectionTitle>
      <SectionTitle size="spot">
        Rousseau got <Highlight noWrap>1.5 days</Highlight> of security review in a few minutes
      </SectionTitle>
      <SectionTitle size="explain">
        Then fixed with{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <Kbd>Ctrl</Kbd>+<Kbd>V</Kbd>
        </span>
      </SectionTitle>
      <SectionTitle size="big">
        How it <Highlight>works</Highlight>
      </SectionTitle>
      <div style={row}>
        <Avatar src="/images/headshot-rob.webp" alt="Robert Bowey" priority />
        <Avatar src="/images/headshot-russo.webp" alt="Rousseau Jean-Julien" size="lg" />
        <Avatar src="/images/feature-jason-nesbitt.webp" alt="Jason Nesbitt" size="feature" />
      </div>
      <div style={row}>
        <Logo src="/images/logo-sunderland-software-city.png" alt="Sunderland Software City" intrinsicWidth={314} intrinsicHeight={140} height={44} />
        <Logo src="/images/logo-durham-city-incubator.png" alt="Durham City Incubator" intrinsicWidth={140} intrinsicHeight={140} height={52} />
        <Logo src="/images/logo-newcastle-university.png" alt="Newcastle University" intrinsicWidth={493} intrinsicHeight={140} height={46} />
        <Logo src="/images/logo-tech-builders-uk-co-working-club.png" alt="Tech Builders UK Co-working Club" intrinsicWidth={495} intrinsicHeight={76} height={34} />
      </div>
    </main>
  );
}
