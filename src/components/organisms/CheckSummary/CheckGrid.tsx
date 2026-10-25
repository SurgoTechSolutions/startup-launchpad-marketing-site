"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface CheckGridProps {
  readonly children: ReactNode;
  readonly className?: string | undefined;
}

/** How long the longest icon move runs, so data-play comes off once every move has finished. */
const PLAY_MS = 1000;
/** The gap between tiles that come into view together, so a row fills in reading order. */
const STAGGER_MS = 50;

/**
 * The tile list. Like RevealList, it only sets data attributes and leaves the animating to
 * styles: data-reveal="armed" on the list once motion is allowed, and data-in on each tile as it
 * scrolls in, with --reveal-delay staggering tiles that arrive together. It also sets data-play
 * on a tile when a mouse comes onto it or a finger taps it, which plays its icon's move once.
 * Without JavaScript or with reduced motion, every tile simply shows and nothing plays.
 */
export function CheckGrid({ children, className }: CheckGridProps): ReactNode {
  const ref = useRef<HTMLUListElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const list = ref.current;
    if (list === null || reduced || !("IntersectionObserver" in window)) return undefined;

    list.dataset.reveal = "armed";
    const observer = new IntersectionObserver(
      (entries) => {
        let k = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
          entry.target.style.setProperty("--reveal-delay", `${String(k * STAGGER_MS)}ms`);
          entry.target.dataset.in = "";
          observer.unobserve(entry.target);
          k += 1;
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );
    for (const item of Array.from(list.children)) observer.observe(item);

    const timers = new Map<HTMLElement, number>();
    function play(tile: HTMLElement): void {
      // Taking the attribute off and forcing a layout restarts a move that is already running.
      delete tile.dataset.play;
      tile.getBoundingClientRect();
      tile.dataset.play = "";
      window.clearTimeout(timers.get(tile));
      timers.set(
        tile,
        window.setTimeout(() => {
          delete tile.dataset.play;
        }, PLAY_MS),
      );
    }
    const tileOf = (event: Event): HTMLElement | null => {
      const tile = event.target instanceof Element ? event.target.closest("li") : null;
      return tile instanceof HTMLElement && tile.parentElement === list ? tile : null;
    };
    // A mouse plays a tile as it comes on; a finger, which has no hover, plays it on tap.
    const onOver = (event: PointerEvent): void => {
      const tile = tileOf(event);
      if (event.pointerType !== "mouse" || tile === null) return;
      if (event.relatedTarget instanceof Node && tile.contains(event.relatedTarget)) return;
      play(tile);
    };
    const onDown = (event: PointerEvent): void => {
      const tile = tileOf(event);
      if (event.pointerType === "mouse" || tile === null) return;
      play(tile);
    };
    list.addEventListener("pointerover", onOver);
    list.addEventListener("pointerdown", onDown);

    return () => {
      observer.disconnect();
      list.removeEventListener("pointerover", onOver);
      list.removeEventListener("pointerdown", onDown);
      for (const timer of timers.values()) window.clearTimeout(timer);
      delete list.dataset.reveal;
    };
  }, [reduced]);

  return (
    <ul ref={ref} className={className}>
      {children}
    </ul>
  );
}
