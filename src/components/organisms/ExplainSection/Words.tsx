import type { CSSProperties, ReactNode } from "react";
import styles from "./ExplainSection.module.css";

/** The explanation or prompt, one span per word so it can appear word by word. Each word carries its place as --w, which staggers it. */
export function Words({ text }: { readonly text: string }): ReactNode {
  let place = 0;
  return text.split(/(\s+)/).map((piece, k) => {
    if (piece.trim() === "") return piece;
    const style = { "--w": place } as CSSProperties;
    place += 1;
    return (
      <span key={k} className={styles.word} style={style}>
        {piece}
      </span>
    );
  });
}
