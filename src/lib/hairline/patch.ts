/**
 * Patch: a brick wall on a footing with three bricks missing, the gaps left
 * open with a dashed outline, and the three bricks lying on the ground in front
 * of it. A few others sit loose. When the pointer comes onto the wall, the
 * bricks lift off the ground one after another and slide home, turning orange
 * as each lands, and the loose bricks tighten in a wave along the wall. When it
 * leaves, every brick slides back out of its gap and drops to the ground with a
 * bounce, and the loose bricks work loose again. The value is the stagger
 * between bricks, in milliseconds.
 *
 * Grown from design/hairline/patch.js, the single-brick version built with the
 * hairline-create skill. This file is now the one the site uses.
 */
import { HL, type ScreenPoint, type Solid, type Tween, type WorldPoint } from "./kernel";

const { Cam, EASE_LIFT, clamp, facing, fit, lerp, prism, proj, reducedMotion, rings, tset, tval, tween, tdone, disposer, mk, pointer, put, register, solid } = HL;

export interface HairlineMount {
  readonly stage: HTMLElement;
  readonly svg: SVGSVGElement;
  /** Receives the caption naming the wall's state: "fixed" or "rest". */
  readonly onRead: (text: string) => void;
}

export interface HairlineHandle {
  readonly set: (value: number) => void;
  readonly destroy: () => void;
}

export interface HairlineFigure {
  readonly name: string;
  /** The figure's own number at intensity 0, 0.5 and 1. */
  readonly range: readonly [number, number, number];
  /** viewBox points the unseen pointer visits when the figure plays; null leaves. */
  readonly tour: readonly (ScreenPoint | null)[];
  readonly mount: (host: HairlineMount, value: number) => HairlineHandle;
}

const L = 26, HB = 11, T = 14, G = 1.6, NC = 5, R = 2.4, B = 1.1, Z0 = 4;
const WALL = 5 * L + 4 * G, TOP = Z0 + NC * HB + (NC - 1) * G;
/** How long one brick takes to lift home, and to fall out, in ms. */
const FILL = 950, FALL = 1000;
/** The three holes, left to right on screen: [course, brick], and where each one's brick lies on the ground: [x0, y0]. */
const HOLES: readonly (readonly [number, number])[] = [[4, 1], [1, 2], [2, 4]];
const SPARE: readonly (readonly [number, number])[] = [[8, T + 14], [56, T + 24], [106, T + 10]];
const LOOSE = [0, 0, 2.6, 0, 0, 3.2, 0, 1.8, 0] as const;

/** A hole's brick in flight: where it set off from, which way it is going, and when it leaves. */
interface Flight {
  readonly from: WorldPoint;
  readonly home: boolean;
  readonly t0: number;
}

interface Brick {
  readonly c: number;
  readonly x0: number;
  readonly x1: number;
  readonly z0: number;
  readonly cx: number;
  /** Which hole this brick fills, or -1 for a brick of the wall. */
  readonly hole: number;
  /** Where it lies on the ground, for a hole's brick. */
  readonly sx: number;
  readonly sy: number;
  readonly rest: number;
  readonly tw: Tween;
  flight: Flight;
  at: WorldPoint;
  el: Solid | null;
  mark: SVGElement | null;
  drawn: string;
  out: boolean | null;
  lit: boolean;
}

/** Course c's bricks as [x0, x1]: running bond, so odd courses start and end on a half brick. */
function course(c: number): [number, number][] {
  if (c % 2 === 0) return [0, 1, 2, 3, 4].map((i) => [i * (L + G), i * (L + G) + L]);
  const h = L / 2 + G / 2;
  const out: [number, number][] = [[0, L / 2 - G / 2]];
  for (let j = 0; j < 4; j++) out.push([h + j * (L + G), h + j * (L + G) + L]);
  out.push([h + 4 * (L + G), WALL]);
  return out;
}

/** How far a wall brick sits out of true at rest: a worn wall, most bricks home. */
const loose = (c: number, i: number): number => LOOSE[(i * 4 + c * 5) % LOOSE.length] ?? 0;

const easeOut = (p: number): number => 1 - (1 - p) ** 3;
/** A dropped object's height lost by p: it falls, hits, and bounces twice, lower each time. */
function bounce(p: number): number {
  const n = 7.5625, d = 2.75;
  if (p < 1 / d) return n * p * p;
  if (p < 2 / d) return n * (p - 1.5 / d) ** 2 + 0.75;
  if (p < 2.5 / d) return n * (p - 2.25 / d) ** 2 + 0.9375;
  return n * (p - 2.625 / d) ** 2 + 0.984375;
}

/** Where a hole's brick is at p of its flight. Home: it rises and comes over first, then slides in. Out: it slides out, then drops and bounces. */
function fly(b: Brick, f: Flight, p: number): WorldPoint {
  const [fx, fy, fz] = f.from;
  if (f.home) {
    const k = EASE_LIFT(p), up = clamp(k / 0.6, 0, 1), inn = clamp((k - 0.5) / 0.5, 0, 1);
    return [lerp(fx, b.x0, up), lerp(fy, 0, inn), lerp(fz, b.z0, up)];
  }
  const out = easeOut(clamp(p / 0.3, 0, 1)), drop = clamp((p - 0.12) / 0.88, 0, 1);
  return [lerp(fx, b.sx, easeOut(clamp(p / 0.55, 0, 1))), lerp(fy, b.sy, out), fz * (1 - bounce(drop))];
}

function mount({ stage, svg, onRead }: HairlineMount, value: number): HairlineHandle {
  const bag = disposer();
  let stag = value;

  const C = Cam(45, 0.5, 2.2);
  const spares = SPARE.flatMap(([x, y]): WorldPoint[] => [[x, y, 0], [x + L, y + T, HB]]);
  const bounds: WorldPoint[] = [[-5, -5, 0], [WALL + 5, T + 5, 0], [WALL + 5, -5, 0], [-5, T + 5, 0], [0, 0, TOP], [WALL, 0, TOP], ...spares];
  fit(C, bounds, 200, 166);
  const P = proj(C), front = facing(C);

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(-5, -5, WALL + 5, T + 5, 3, 1.2);
  put(solid(g), prism(P, front, pr, pi, 0, Z0));

  // every brick, painted bottom course first and left to right within a course
  const bricks: Brick[] = [];
  for (let c = 0; c < NC; c++) {
    course(c).forEach(([x0, x1], i) => {
      const hole = HOLES.findIndex(([hc, hi]) => hc === c && hi === i);
      const rest = hole >= 0 ? 0 : loose(c, i);
      const [sx, sy] = SPARE[hole] ?? [0, 0];
      const ground: WorldPoint = [sx, sy, 0];
      bricks.push({
        c, x0, x1, z0: Z0 + c * (HB + G), cx: (x0 + x1) / 2, hole, sx, sy, rest, tw: tween(rest),
        flight: { from: ground, home: false, t0: -1e9 }, at: ground, el: null, mark: null, drawn: "", out: null, lit: false,
      });
    });
  }
  for (const b of bricks) {
    // a hole's brick keeps a marker in slot order, and paints after the whole wall while it is out in front
    if (b.hole >= 0) b.mark = mk("g", {}, g);
    else b.el = solid(g);
  }
  const holes = bricks.filter((b) => b.hole >= 0).sort((p, q) => p.hole - q.hole);
  // each empty slot keeps the dashed outline of the brick it is missing, painted before that brick
  for (const b of holes) {
    const [ring, inner] = rings(b.x0, 0, b.x1, T, R, B);
    if (b.mark) mk("path", { d: prism(P, front, ring, inner, b.z0, b.z0 + HB).sil, class: "nf dash" }, b.mark);
  }
  for (const b of holes.slice().sort((p, q) => p.sx + p.sy - (q.sx + q.sy))) b.el = solid(g);

  function draw(b: Brick, [x, y, z]: WorldPoint): void {
    const key = `${String(x)},${String(y)},${String(z)}`;
    if (key === b.drawn || !b.el) return;
    b.drawn = key;
    const [ring, inner] = rings(x, y, x + b.x1 - b.x0, y + T, R, B);
    put(b.el, prism(P, front, ring, inner, z, z + HB));
    if (b.hole < 0) return;
    const out = y > T / 2;
    if (out !== b.out) {
      b.out = out;
      if (out) g.append(b.el.g);
      else b.mark?.after(b.el.g);
    }
  }

  const loop = register(stage, (_dt, now) => {
    let moving = false;
    for (const b of bricks) {
      if (b.hole < 0) {
        draw(b, [b.x0, tval(b.tw, now), b.z0]);
        if (!tdone(b.tw, now)) moving = true;
        continue;
      }
      const f = b.flight, dur = f.home ? FILL : FALL;
      const p = reducedMotion() ? 1 : clamp((now - f.t0) / dur, 0, 1);
      b.at = fly(b, f, p);
      draw(b, b.at);
      // a brick lights up as it lands in its gap, and goes out as it leaves
      const lit = f.home && p > 0.92;
      if (lit !== b.lit) {
        b.lit = lit;
        b.el?.sil.classList.toggle("hi", lit);
      }
      if (p < 1) moving = true;
    }
    return moving;
  });
  bag.add(loop.unregister);

  // the hit area: the box round the whole figure at rest, wall and fallen bricks alike. It never moves.
  const box = bounds.map(([x, y, z]) => P(x, y, z));
  const [bx0, bx1] = [Math.min(...box.map((q) => q[0])) - 8, Math.max(...box.map((q) => q[0])) + 8];
  const [by0, by1] = [Math.min(...box.map((q) => q[1])) - 8, Math.max(...box.map((q) => q[1])) + 8];
  const onWall = ([x, y]: ScreenPoint): boolean => x >= bx0 && x <= bx1 && y >= by0 && y <= by1;

  let full = false;
  /** Fills every gap (true) or lets every brick fall out (false), one after another. */
  function setFull(on: boolean): void {
    if (on === full) return;
    full = on;
    const now = performance.now();
    holes.forEach((b, k) => {
      // filling runs left to right; falling lets go a little quicker, so the bricks tumble out together
      const delay = on ? k * stag : k * stag * 0.5;
      b.flight = { from: b.at, home: on, t0: now + delay };
    });
    for (const b of bricks) if (b.hole < 0) tset(b.tw, on ? 0 : b.rest, now, (b.cx / WALL) * stag * 3);
    onRead(on ? "fixed" : "rest");
    loop.wake();
  }

  onRead("rest");
  bag.add(
    pointer(stage, {
      move: (p) => {
        setFull(onWall(p));
      },
      leave: () => {
        setFull(false);
      },
    }),
  );
  bag.add(() => {
    svg.replaceChildren();
  });

  return {
    set: (v) => {
      stag = v;
    },
    destroy: bag.dispose,
  };
}

export const PATCH: HairlineFigure = {
  name: "patch",
  range: [90, 180, 300],
  // two stops on the wall keep the pointer there long enough for every brick to land, then it leaves and they fall
  tour: [[174, 133], [238, 178], null],
  mount,
};
