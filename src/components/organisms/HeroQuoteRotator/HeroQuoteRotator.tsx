"use client";

import { useState, type ReactNode } from "react";
import { useInterval } from "@/hooks/useInterval";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cx } from "@/lib/cx";
import styles from "./HeroQuoteRotator.module.css";

const ROTATE_EVERY_MS = 4500;

export interface HeroQuoteRotatorProps {
  /** One rendered quote per slide, built on the server. */
  readonly slides: readonly ReactNode[];
  /** One label per slide, for its dot button. */
  readonly dotLabels: readonly string[];
  readonly label: string;
}

/**
 * The hero quote card. Every slide sits in the same grid cell, so the card is always as
 * tall as the longest quote and never jumps. Slides cross-fade every 4.5 seconds, pause
 * while hovered or focused, and stop once a visitor picks one with the dots. With reduced
 * motion, or without JavaScript, the first slide stays put.
 */
export function HeroQuoteRotator({ slides, dotLabels, label }: HeroQuoteRotatorProps): ReactNode {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  useInterval(
    () => {
      setActive((current) => (current + 1) % slides.length);
    },
    reduced || paused || stopped || slides.length < 2 ? null : ROTATE_EVERY_MS,
  );

  return (
    <div
      className={styles.frame}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => {
        setPaused(true);
      }}
      onMouseLeave={() => {
        setPaused(false);
      }}
      onFocus={() => {
        setPaused(true);
      }}
      onBlur={() => {
        setPaused(false);
      }}
    >
      <div className={styles.slides}>
        {slides.map((slide, index) => {
          const isActive = index === active;
          return (
            <div
              // Slides are static content, so their position is a stable key.
              key={index}
              className={cx(styles.slide, isActive && styles.active)}
              aria-hidden={!isActive}
              inert={!isActive}
            >
              {slide}
            </div>
          );
        })}
      </div>
      {slides.length > 1 && (
        <div className={styles.dots}>
          {dotLabels.map((dotLabel, index) => (
            <button
              key={dotLabel}
              type="button"
              className={cx(styles.dot, index === active && styles.dotActive)}
              aria-label={dotLabel}
              aria-current={index === active}
              onClick={() => {
                setActive(index);
                setStopped(true);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
