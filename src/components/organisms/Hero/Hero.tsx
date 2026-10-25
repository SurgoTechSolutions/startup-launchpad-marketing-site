import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { HeadingFill } from "@/components/atoms/HeadingFill";
import { Lede } from "@/components/atoms/Lede";
import { PatchFigure } from "@/components/atoms/PatchFigure";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import type { HeroContent } from "@/types";
import { HeroQuoteRotator } from "../HeroQuoteRotator";
import styles from "./Hero.module.css";

export interface HeroProps {
  readonly content: HeroContent;
  readonly signupUrl: string;
}

export function Hero({ content, signupUrl }: HeroProps): ReactNode {
  // Slides render on the server; the rotator only switches between them.
  const slides = content.quotes.map((quote, index) => (
    <QuoteCard
      key={quote.text}
      variant="shout"
      text={quote.text}
      person={quote.person}
      {...(quote.context === undefined ? {} : { context: quote.context })}
      priority={index === 0}
    />
  ));
  const dotLabels = content.quotes.map((quote) => `${content.quoteDotLabel} ${quote.person.name}`);

  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <HeadingFill onLoad>
          <SectionTitle as="h1">
            <RichText content={content.title} />
          </SectionTitle>
        </HeadingFill>
        <Lede>{content.lede}</Lede>
        <Button href={signupUrl}>{content.ctaLabel}</Button>
      </div>
      <div className={styles.aside}>
        <div className={styles.figureCell}>
          <PatchFigure label={content.figureLabel} className={styles.figure} intro />
        </div>
        <div className={styles.quotes}>
          <HeroQuoteRotator slides={slides} dotLabels={dotLabels} label={content.quotesLabel} />
        </div>
      </div>
    </section>
  );
}
