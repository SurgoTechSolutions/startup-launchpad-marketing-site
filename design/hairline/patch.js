/**
 * Patch: a brick wall on a footing with three bricks missing, the gaps left
 * open, and the three bricks lying on the ground in front of it. A few others
 * sit loose. The gap nearest the pointer takes its brick back, lifted off the
 * ground and slid home, and the loose bricks round it tighten, staggered
 * outwards from the hole on the 700ms lift curve. The slider is the reach of
 * that tightening, in brick lengths.
 *
 * The pattern: discrete items. Tweens, a stagger by distance, and a hit test
 * on each hole's empty slot and its brick on the ground, which never move, so
 * a brick on its way home cannot flip the choice.
 */
const { Cam, clamp, facing, fit, lerp, prism, proj, rings, tset, tval, tween, tdone, disposer, mk, pointer, put, register, solid } = HL;

const L = 26, HB = 11, T = 14, G = 1.6, NC = 5, R = 2.4, B = 1.1, Z0 = 4, STEP = 45;
const WALL = 5 * L + 4 * G, TOP = Z0 + NC * HB + (NC - 1) * G;
/** The three holes, left to right on screen: [course, brick], and where each one's brick lies on the ground: [x0, y0]. */
const HOLES = [[4, 1], [1, 2], [2, 4]], SPARE = [[8, T + 14], [56, T + 24], [106, T + 10]];

/** Course c's bricks as [x0, x1]: running bond, so odd courses start and end on a half brick. */
function course(c) {
  if (c % 2 === 0) return [0, 1, 2, 3, 4].map((i) => [i * (L + G), i * (L + G) + L]);
  const h = L / 2 + G / 2, out = [[0, L / 2 - G / 2]];
  for (let j = 0; j < 4; j++) out.push([h + j * (L + G), h + j * (L + G) + L]);
  out.push([h + 4 * (L + G), WALL]);
  return out;
}

/** How far a wall brick sits out of true at rest: a worn wall, most bricks home. */
const loose = (c, i) => [0, 0, 2.6, 0, 0, 3.2, 0, 1.8, 0][(i * 4 + c * 5) % 9];

/** A hole's brick at t, from lying on the ground (0) to home in its slot (1): it rises and comes over first, then slides in. */
function path(b, t) {
  const up = clamp(t / 0.6, 0, 1), inn = clamp((t - 0.5) / 0.5, 0, 1);
  return [lerp(b.sx, b.x0, up), lerp(b.sy, 0, inn), lerp(0, b.z0, up)];
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let reach = value;

  const C = Cam(45, 0.5, 1.72);
  const spares = SPARE.map(([x, y]) => [[x, y, 0], [x + L, y + T, HB]]).flat();
  fit(C, [[-5, -5, 0], [WALL + 5, T + 5, 0], [WALL + 5, -5, 0], [-5, T + 5, 0], [0, 0, TOP], [WALL, 0, TOP], ...spares], 200, 166);
  const P = proj(C), front = facing(C);

  const g = mk("g", {}, svg);
  const [pr, pi] = rings(-5, -5, WALL + 5, T + 5, 3, 1.2);
  put(solid(g), prism(P, front, pr, pi, 0, Z0));

  // every brick, painted bottom course first and left to right within a course
  const bricks = [];
  for (let c = 0; c < NC; c++) {
    course(c).forEach(([x0, x1], i) => {
      const hole = HOLES.findIndex(([hc, hi]) => hc === c && hi === i);
      const rest = hole >= 0 ? 0 : loose(c, i), z0 = Z0 + c * (HB + G);
      const b = { c, i, x0, x1, z0, cx: (x0 + x1) / 2, hole, rest, tw: tween(rest), drawn: NaN };
      if (hole >= 0) [b.sx, b.sy] = SPARE[hole];
      bricks.push(b);
    });
  }
  for (const b of bricks) {
    // a hole's brick keeps a marker in slot order, and paints after the whole wall while it is out in front
    if (b.hole >= 0) b.mark = mk("g", {}, g);
    else b.el = solid(g);
  }
  const holes = HOLES.map((_, k) => bricks.find((b) => b.hole === k));
  // each empty slot keeps the dashed outline of the brick it is missing, painted before that brick
  for (const b of holes) {
    const [ring, inner] = rings(b.x0, 0, b.x1, T, R, B);
    mk("path", { d: prism(P, front, ring, inner, b.z0, b.z0 + HB).sil, class: "nf dash" }, b.mark);
  }
  for (const b of holes.slice().sort((p, q) => p.sx + p.sy - (q.sx + q.sy))) b.el = solid(g);

  function draw(b, v) {
    if (v === b.drawn) return;
    b.drawn = v;
    const [x, y, z] = b.hole >= 0 ? path(b, v) : [b.x0, v, b.z0];
    const [ring, inner] = rings(x, y, x + b.x1 - b.x0, y + T, R, B);
    put(b.el, prism(P, front, ring, inner, z, z + HB));
    if (b.hole < 0) return;
    const out = y > T / 2;
    if (out !== b.out) { b.out = out; if (out) g.append(b.el.g); else b.mark.after(b.el.g); }
  }

  const loop = register(stage, (_dt, now) => {
    let moving = false;
    for (const b of bricks) { draw(b, tval(b.tw, now)); if (!tdone(b.tw, now)) moving = true; }
    return moving;
  });
  bag.add(loop.unregister);

  // hit areas: from each hole's empty slot down to its brick on the ground, along their tops. Nothing draws them.
  const zones = holes.map((b) => [P(b.cx, T / 2, b.z0 + HB), P(b.sx + L / 2, b.sy + T / 2, HB)]);
  /** The hole whose zone is nearest the point, within reach of a hand; -1 when none is. */
  function hit([x, y]) {
    let best = -1, bd = 26;
    zones.forEach(([a, e], k) => {
      const dx = e[0] - a[0], dy = e[1] - a[1];
      const t = clamp(((x - a[0]) * dx + (y - a[1]) * dy) / (dx * dx + dy * dy), 0, 1);
      const d = Math.hypot(x - a[0] - t * dx, y - a[1] - t * dy);
      if (d < bd) { bd = d; best = k; }
    });
    return best;
  }

  let act = -1;
  /** Fills hole a (-1 lets every brick go back). The tightening spreads out from the hole filled, or the one let go. */
  function apply(a, from) {
    const now = performance.now(), h = from >= 0 ? holes[from] : null;
    for (const b of bricks) {
      const dist = h ? Math.hypot((b.cx - h.cx) / L, b.c - h.c) : 0;
      if (b.hole >= 0) {
        tset(b.tw, b.hole === a ? 1 : 0, now, 0);
        b.el.sil.classList.toggle("hi", a < 0 ? b.hole === 0 : b.hole === a);
      } else {
        tset(b.tw, a < 0 ? b.rest : b.rest * (1 - clamp(1 - dist / reach, 0, 1)), now, dist * STEP);
      }
    }
    read.textContent = a < 0 ? "rest" : `hole ${a + 1} · fixed`;
    loop.wake();
  }
  function setActive(a) {
    if (a === act) return;
    const from = a >= 0 ? a : act;
    act = a;
    apply(a, from);
  }

  apply(-1, -1);
  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { reach = v; if (act >= 0) apply(act, act); },
    destroy: bag.dispose,
  };
}

hairline({
  name: "patch",
  means: "A wall with three bricks missing: point at a gap and its brick lifts home, and the loose bricks round it settle in turn.",
  rules: [1, 2, 5, 8],
  range: [0.8, 2, 3.6],
  tour: [[166, 97], [183, 162], [267, 185], null],
  mount,
});
