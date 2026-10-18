import type { ReactNode } from "react";
import { AreaIcon } from "@/components/atoms/AreaIcon";
import type { DashTileData, Severity } from "@/types";
import styles from "./DashTile.module.css";

const SEVERITY_ORDER = ["critical", "high", "medium", "low", "info"] as const satisfies readonly Severity[];

export interface DashTileProps {
  readonly tile: DashTileData;
  /** Replaces the plain total, e.g. with a count-up. */
  readonly count?: ReactNode;
}

export function getTileTotal(tile: DashTileData): number {
  return SEVERITY_ORDER.reduce((sum, severity) => sum + (tile.counts[severity] ?? 0), 0);
}

/** The worst severity present sets the colour of the total. */
function worstSeverity(tile: DashTileData): Severity {
  return SEVERITY_ORDER.find((severity) => (tile.counts[severity] ?? 0) > 0) ?? "info";
}

/** One area tile on the example dashboard: total, severity bar and legend. */
export function DashTile({ tile, count }: DashTileProps): ReactNode {
  const present = SEVERITY_ORDER.flatMap((severity) => {
    const value = tile.counts[severity];
    return value === undefined || value === 0 ? [] : [{ severity, value }];
  });

  return (
    <div className={styles.tile}>
      <div className={styles.head}>
        <AreaIcon area={tile.area} className={styles.icon} />
        <span>{tile.label}</span>
      </div>
      <div className={styles.total}>
        <b className={styles[`total-${worstSeverity(tile)}`]}>{count ?? getTileTotal(tile)}</b>
        <span>open issues</span>
      </div>
      <div className={styles.bar}>
        {present.map(({ severity, value }) => (
          <i key={severity} className={styles[severity]} style={{ flex: value }} />
        ))}
      </div>
      <ul className={styles.legend}>
        {present.map(({ severity, value }) => (
          <li key={severity}>
            <i className={styles[severity]} />
            {value} {severity}
          </li>
        ))}
      </ul>
    </div>
  );
}
