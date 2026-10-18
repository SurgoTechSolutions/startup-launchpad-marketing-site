"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./JumpNav.module.css";

export interface JumpLink {
  /** The id of the section the link jumps to. */
  readonly id: string;
  readonly label: string;
}

export interface JumpNavProps {
  readonly links: readonly JumpLink[];
  /** Accessible name for the links. */
  readonly label: string;
}

/**
 * Links to each section of a long page. It sticks under the header while scrolling and marks the
 * section in view, with a pill that glides from link to link. Without JavaScript it is a plain row
 * of links that still jump to each section.
 */
export function JumpNav({ links, label }: JumpNavProps): ReactNode {
  const [current, setCurrent] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = links.flatMap(({ id }) => {
      const section = document.getElementById(id);
      return section === null ? [] : [section];
    });
    // A section counts as current while it crosses the band just above the middle of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    for (const section of sections) observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, [links]);

  // On narrow screens the links scroll sideways, so keep the current one in view.
  useEffect(() => {
    const track = trackRef.current;
    if (track === null) return;
    const chip = track.querySelector<HTMLElement>('[aria-current="true"]');
    if (chip === null) return;
    const left = chip.offsetLeft - (track.clientWidth - chip.offsetWidth) / 2;
    track.scrollTo({ left, behavior: "smooth" });
  }, [current]);

  return (
    <nav className={styles.nav} aria-label={label}>
      <div ref={trackRef} className={styles.track}>
        {links.map(({ id, label: linkLabel }) => (
          <a
            key={id}
            href={`#${id}`}
            className={styles.chip}
            aria-current={id === current ? "true" : undefined}
          >
            {linkLabel}
          </a>
        ))}
      </div>
    </nav>
  );
}
