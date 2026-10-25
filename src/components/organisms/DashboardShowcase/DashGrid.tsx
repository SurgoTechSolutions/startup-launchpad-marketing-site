"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { DashTile } from "@/components/molecules/DashTile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { DashTileData } from "@/types";
import styles from "./DashboardShowcase.module.css";

export interface DashGridProps {
  readonly tiles: readonly DashTileData[];
}

/** The gap between tiles that come into view together, so a row loads in reading order. */
const STAGGER_MS = 280;
/** A beat before the first tile, so the window has started to rise. */
const WAIT_MS = 150;

/**
 * The example dashboard's tiles, loading like a scan finishing. Each tile rises in, then its
 * severity bar fills and the legend follows. Tiles that come into view together load one after
 * another; a tile reached on its own, as when they are stacked on a phone, loads straight away.
 * Until motion is allowed after hydration, or with reduced motion, every tile shows its final state.
 */
export function DashGrid({ tiles }: DashGridProps): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [armed, setArmed] = useState(false);
  // When each tile starts loading, in ms after it was seen; null until it is seen.
  const [delays, setDelays] = useState<readonly (number | null)[]>(() => tiles.map(() => null));

  useEffect(() => {
    const grid = ref.current;
    if (grid === null || reduced || !("IntersectionObserver" in window)) return undefined;

    setArmed(true);
    const cells = Array.from(grid.children);
    const observer = new IntersectionObserver(
      (entries) => {
        const arrived = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => {
            observer.unobserve(entry.target);
            return cells.indexOf(entry.target);
          })
          .sort((a, b) => a - b);
        if (arrived.length === 0) return;
        setDelays((previous) => {
          const next = [...previous];
          arrived.forEach((index, k) => {
            next[index] = WAIT_MS + k * STAGGER_MS;
          });
          return next;
        });
      },
      { threshold: 0.3 },
    );
    for (const cell of cells) observer.observe(cell);

    return () => {
      observer.disconnect();
      setArmed(false);
    };
  }, [reduced]);

  return (
    <div ref={ref} className={styles.grid}>
      {tiles.map((tile, index) => {
        const delay = delays[index] ?? null;
        return (
          <div
            key={tile.area}
            className={styles.cell}
            data-tile={armed ? (delay === null ? "waiting" : "in") : undefined}
            style={delay === null ? undefined : ({ "--tile-delay": `${String(delay)}ms` } as CSSProperties)}
          >
            <DashTile tile={tile} />
          </div>
        );
      })}
    </div>
  );
}
