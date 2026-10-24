/** Types for the parts of the vendored Hairline kernel this site calls. The index at the top of kernel.js documents each one. */

/** A screen point in the 400 × 320 viewBox. */
export type ScreenPoint = [number, number];
/** A world point: x and y on the ground, z up. */
export type WorldPoint = readonly [number, number, number];

export interface Camera {
  readonly S: number;
  readonly k: number;
}
/** One sample of a rounded ring, with its outward normal. */
export interface RingSample {
  readonly u: number;
  readonly v: number;
  readonly nu: number;
  readonly nv: number;
}
export type Ring = readonly RingSample[];
export type Project = (x: number, y: number, z: number) => ScreenPoint;
export type Front = (sample: RingSample) => boolean;
/** A 700ms tween on the lift curve. Opaque: read it with tval and tdone. */
export interface Tween {
  readonly __tween: unique symbol;
}
export interface SolidPaths {
  readonly sil: string;
  readonly crease: string;
}
export interface Solid {
  readonly g: SVGGElement;
  readonly sil: SVGPathElement;
  readonly cr: SVGPathElement;
}
export interface Board {
  wake: () => void;
  unregister: () => void;
}
export interface PointerHandlers {
  move?: (point: ScreenPoint) => void;
  down?: (point: ScreenPoint) => void;
  leave?: () => void;
}
export interface Disposer {
  add: (fn: () => void) => void;
  dispose: () => void;
}

export declare const HL: {
  Cam: (azDeg: number, k: number, S: number) => Camera;
  fit: (C: Camera, points: readonly WorldPoint[], cx: number, cy: number) => void;
  proj: (C: Camera) => Project;
  facing: (C: Camera) => Front;
  rings: (x0: number, y0: number, x1: number, y1: number, r: number, b: number) => [Ring, Ring];
  prism: (P: Project, front: Front, ring: Ring, inner: Ring, z0: number, z1: number) => SolidPaths;
  clamp: (v: number, a: number, b: number) => number;
  lerp: (a: number, b: number, t: number) => number;
  tween: (v: number, dur?: number) => Tween;
  tset: (tw: Tween, to: number, now: number, delay?: number) => void;
  tval: (tw: Tween, now: number) => number;
  tdone: (tw: Tween, now: number) => boolean;
  /** The 700ms lift curve, (.32, .72, 0, 1), as a function of progress. */
  EASE_LIFT: (p: number) => number;
  reducedMotion: () => boolean;
  mk: (tag: string, attrs: Readonly<Record<string, string | number>>, parent: Element) => SVGElement;
  solid: (parent: Element) => Solid;
  put: (solid: Solid, paths: SolidPaths) => void;
  register: (stage: HTMLElement, tick: (dt: number, now: number) => boolean) => Board;
  pointer: (stage: HTMLElement, handlers: PointerHandlers) => () => void;
  disposer: () => Disposer;
  inject: (root: Document | ShadowRoot) => void;
  tour: (stage: HTMLElement, stops: readonly (ScreenPoint | null)[], onStop?: (i: number) => void) => { stop: () => void };
};
