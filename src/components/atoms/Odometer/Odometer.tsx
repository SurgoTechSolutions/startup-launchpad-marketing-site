import type { CSSProperties, ReactNode } from "react";
import styles from "./Odometer.module.css";

export interface OdometerProps {
  /** Price shown by default, e.g. "£27". */
  readonly from: string;
  /**
   * Price shown when an ancestor sets --odometer-to: 1, e.g. "£21.60". It must share the
   * currency sign and the number of whole-number digits with `from`.
   */
  readonly to: string;
}

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

interface Parts {
  readonly prefix: string;
  readonly whole: string;
  readonly fraction: string;
}

/** Splits "£21.60" into "£", "21" and "60". */
function split(value: string): Parts {
  const match = /^(\D*)(\d+)(?:\.(\d+))?$/.exec(value);
  return { prefix: match?.[1] ?? "", whole: match?.[2] ?? "", fraction: match?.[3] ?? "" };
}

function Column({ from, to }: { readonly from: string; readonly to: string }): ReactNode {
  const style = { "--from": Number(from), "--to": Number(to) } as CSSProperties;
  return (
    <span className={styles.digit} style={style}>
      <span className={styles.column}>
        {DIGITS.map((digit) => (
          <span key={digit}>{digit}</span>
        ))}
      </span>
    </span>
  );
}

/**
 * A price drawn as odometer wheels. Each digit is a column of 0 to 9 behind a window one line
 * tall, slid up to the right number. Switching price changes no text: an ancestor flips
 * --odometer-to from 0 to 1 and the columns roll to their new digits, with a spring that
 * overshoots and settles. Hidden from screen readers, so pair it with the price as text.
 */
export function Odometer({ from, to }: OdometerProps): ReactNode {
  const a = split(from);
  const b = split(to);
  const width = Math.max(a.whole.length, b.whole.length);
  const wholeA = a.whole.padStart(width, "0");
  const wholeB = b.whole.padStart(width, "0");
  const fractionWidth = Math.max(a.fraction.length, b.fraction.length);
  const fractionA = a.fraction.padEnd(fractionWidth, "0");
  const fractionB = b.fraction.padEnd(fractionWidth, "0");
  const fractionStyle = {
    "--from": a.fraction === "" ? 0 : 1,
    "--to": b.fraction === "" ? 0 : 1,
  } as CSSProperties;

  return (
    <span className={styles.odometer} aria-hidden="true">
      {a.prefix}
      {Array.from(wholeA).map((digit, index) => (
        // Digits are positional, so their index is a stable key.
        <Column key={index} from={digit} to={wholeB[index] ?? "0"} />
      ))}
      {fractionWidth > 0 && (
        <span className={styles.fraction} style={fractionStyle}>
          .
          {Array.from(fractionA).map((digit, index) => (
            <Column key={index} from={digit} to={fractionB[index] ?? "0"} />
          ))}
        </span>
      )}
    </span>
  );
}
