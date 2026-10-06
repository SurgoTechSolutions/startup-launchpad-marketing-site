import type { ReactNode } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { QuoteCard } from "@/components/molecules/QuoteCard";
import { RichText } from "@/components/molecules/RichText";
import { SectionHead } from "@/components/molecules/SectionHead";
import { cx } from "@/lib/cx";
import type { ComparisonCell, CostComparisonContent } from "@/types";
import styles from "./CostComparison.module.css";

export interface CostComparisonProps {
  readonly content: CostComparisonContent;
}

const MARKS = { yes: "✓", no: "✗" } as const;

function Cell({
  cell,
  ours,
  labels,
}: {
  readonly cell: ComparisonCell;
  readonly ours: boolean;
  readonly labels: CostComparisonContent["cellLabels"];
}): ReactNode {
  if (cell.kind === "price") {
    return (
      <td className={cx(ours && styles.ours)}>
        <b>{cell.amount}</b>
        <small>{cell.unit}</small>
      </td>
    );
  }

  return (
    <td className={cx(styles[cell.kind], ours && styles.ours)}>
      <span className={styles.mark}>
        <span aria-hidden="true">{MARKS[cell.kind]}</span>
        <span className="sr-only">{labels[cell.kind]}</span>
      </span>
    </td>
  );
}

export function CostComparison({ content }: CostComparisonProps): ReactNode {
  return (
    <section>
      <SectionHead>
        <SectionTitle size="find">
          <RichText content={content.title} />
        </SectionTitle>
      </SectionHead>
      <div className={styles.band}>
        <div className={styles.scroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">{content.rowHeader}</span>
                </th>
                {content.columns.map((column) => (
                  <th key={column.label} scope="col" className={cx(column.ours === true && styles.ours)}>
                    {column.label}
                    {column.sublabel !== undefined && <small>{column.sublabel}</small>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.label} className={cx(row.isPrice === true && styles.priceRow)}>
                  <th scope="row">{row.label}</th>
                  {row.cells.map((cell, index) => (
                    <Cell
                      // Cells line up with the columns, so their position is a stable key.
                      key={index}
                      cell={cell}
                      ours={content.columns[index]?.ours === true}
                      labels={content.cellLabels}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.fine}>
          {content.footnote.map((part) =>
            typeof part === "string" ? (
              part
            ) : (
              <a key={part.href} href={part.href}>
                {part.label}
              </a>
            ),
          )}
        </p>
      </div>
      <div className={styles.quotes}>
        {content.quotes.map((quote) => (
          <QuoteCard key={quote.text} variant="card" text={quote.text} person={quote.person} />
        ))}
      </div>
    </section>
  );
}
