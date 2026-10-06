import type { ReactNode } from "react";
import type { DashArea, DashTileData, Severity } from "@/types";
import styles from "./DashTile.module.css";

const SEVERITY_ORDER = ["critical", "high", "medium", "low", "info"] as const satisfies readonly Severity[];

/** Icon paths copied from the mock-up. Presentation only, so they live with the component. */
const ICONS: Record<DashArea, ReactNode> = {
  security: <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />,
  accessibility: (
    <>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  reliability: <path d="M2 12h4l2.5-6 4 12 2.5-6h7" />,
  cost: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.5 0-2.6.8-2.6 2s1 1.7 2.6 2 2.7.8 2.7 2-1.2 2-2.7 2c-1.2 0-2.2-.5-2.7-1.3M12 6.5v1.5M12 16v1.5" />
    </>
  ),
  housekeeping: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8.5 10.5l1.5 1.5 3-3M8.5 15.5h7" />
    </>
  ),
};

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
        <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
          {ICONS[tile.area]}
        </svg>
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
