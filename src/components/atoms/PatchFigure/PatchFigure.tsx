"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { HL } from "@/lib/hairline/kernel";
import { PATCH } from "@/lib/hairline/patch";
import { cx } from "@/lib/cx";
import styles from "./PatchFigure.module.css";

export interface PatchFigureProps {
  /** Accessible name for the drawing. */
  readonly label: string;
  readonly className?: string | undefined;
}

/**
 * The Hairline "patch" figure: a brick wall with three bricks missing. With the pointer on the
 * wall the bricks lift home one after another; when it leaves they fall back out. Until then
 * it rests with the gaps showing. The server sends the empty box at its final size, so
 * nothing shifts when the drawing mounts. Under reduced motion every move lands at once.
 */
export function PatchFigure({ label, className }: PatchFigureProps): ReactNode {
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    HL.inject(document);
    const svg = HL.mk("svg", { viewBox: "0 0 400 320", "aria-hidden": "true" }, stage) as SVGSVGElement;
    const figure = PATCH.mount(
      {
        stage,
        svg,
        onRead: () => {
          // The hero shows no read-out.
        },
      },
      PATCH.range[1],
    );
    return () => {
      figure.destroy();
      svg.remove();
    };
  }, []);

  return <div ref={stageRef} className={cx(styles.stage, className)} data-hairline={PATCH.name} role="img" aria-label={label} />;
}
