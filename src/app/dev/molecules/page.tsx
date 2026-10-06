import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { CopyPromptButton } from "@/components/molecules/CopyPromptButton";
import { DashTile } from "@/components/molecules/DashTile";
import { FaqItem } from "@/components/molecules/FaqItem";
import { FindingCard } from "@/components/molecules/FindingCard";
import { PlanCard } from "@/components/molecules/PlanCard";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { StatCard } from "@/components/molecules/StatCard";
import { StepItem } from "@/components/molecules/StepItem";
import { SIGNUP_URL } from "@/config/site";
import { HERO_QUOTES } from "@/content/hero";
import { getPerson } from "@/content/people";

// Development-only gallery for checking molecules against the mock-up. Removed before launch.
export default function MoleculesPreviewPage(): ReactNode {
  if (process.env.NODE_ENV === "production") notFound();

  const grid3 = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 } as const;
  const hero = HERO_QUOTES[0];

  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px", display: "grid", gap: 48 }}>
      <h2>
        <RichText content={["Then fixed with ", { keys: ["Ctrl", "V"] }, " and ", { badge: "critical" }, " ", { highlight: "1.5 days", noWrap: true }]} />
      </h2>
      <QuoteCard variant="shout" text={hero.text} person={getPerson(hero.person)} context={hero.context} priority />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        <QuoteCard variant="spotlight" text="It did in a few minutes what my security colleague spent 1.5 days to unearth." person={getPerson("rousseau")} />
        <QuoteCard variant="glyph" text="What you've given me will be a huge help, I can't thank you enough!" person={getPerson("jo")} />
        <QuoteCard variant="stacked" text="I like how simply it's explained. You're clearly explaining the scenario rather than giving me just a bunch of words I don't understand." person={getPerson("alice")} />
        <QuoteCard variant="rule" text="That's incredible what you've built, guys, honestly... even just the visual side of it, it's brilliant, it's so intuitive." person={getPerson("jo")} />
        <QuoteCard variant="card" text="Pen testing in general is expensive. The problem you're solving here goes beyond vibe-coded software." person={getPerson("rousseau")} />
        <QuoteCard variant="wall" text="Looks great from a user's point of view. Nice and easy to use." person={getPerson("catherine")} />
      </div>
      <QuoteCard variant="centered" text="I was paying 250 quid a month for a similar service. So the price has come down and the value has gone up." person={getPerson("rosie")} />
      <div style={grid3}>
        <StatCard hot value="78%" label="had API keys or secrets exposed in their code or its history" />
        <StatCard hot value="67%" label="let a stranger change or trigger things without logging in" />
        <StatCard hot value="44%" label="let someone get a product or paid features without paying" />
      </div>
      <div style={grid3}>
        <FindingCard finding={{ category: "Tampering", source: "Secondhand marketplace", title: "A £2,000 item, yours for 1p", body: "Prices were worked out in the browser and saved straight to the database. A buyer could rewrite the total before checkout." }} />
        <FindingCard finding={{ category: "Elevation of privilege", source: "Marketplace", title: "Make yourself an admin", body: "Any logged-in user could add one extra field to a routine profile update and give themselves full admin rights." }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <PlanCard ctaHref={SIGNUP_URL} plan={{ title: "Your first scan", price: { amount: "Free" }, features: ["Full scan of your repository and live site", "Your issue count across all six areas"], ctaLabel: "Scan my code free" }} />
        <PlanCard ctaHref={SIGNUP_URL} plan={{ title: "Ongoing protection", price: { amount: "£20", period: "a month" }, features: ["Every finding explained in plain English", "Cancel any time"], featured: true, note: "Under 1% of a contractor one day a week." }} />
      </div>
      <ol style={{ counterReset: "step", listStyle: "none", padding: 0, margin: 0, maxWidth: 780 }}>
        <StepItem step={{ title: "Connect", body: "Install our GitHub app. Read-only, and you can revoke it whenever you like." }} />
        <StepItem step={{ title: "Scan free", body: "The scan runs against your repository and your live site." }} />
      </ol>
      <FaqItem faq={{ question: "How does the scan work?", answer: "Around 90% is fixed rules run by purpose-built engines, so you get the same result every time." }} />
      <div style={grid3}>
        <DashTile tile={{ area: "security", label: "Security", counts: { critical: 13, high: 53, medium: 28, low: 10, info: 57 } }} />
        <DashTile tile={{ area: "reliability", label: "Reliability & Performance", counts: { medium: 14, info: 2 } }} />
        <DashTile tile={{ area: "housekeeping", label: "Housekeeping", counts: { low: 532, info: 51 } }} />
      </div>
      <div>
        <CopyPromptButton text="Sample fix prompt" targetId="sample-prompt" labels={{ idle: "Copy prompt", copied: "Copied", selected: "Selected, press copy" }} />
        <pre id="sample-prompt">Sample fix prompt</pre>
      </div>
    </main>
  );
}
