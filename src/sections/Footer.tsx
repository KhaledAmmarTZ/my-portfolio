"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/*  Edit these                                                                */
/* -------------------------------------------------------------------------- */

const CONFIG = {
  name: "Khaled Ammar",
  tagline: "Crafting digital experiences that inspire and innovate",
};

const EXPLORE = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const ELSEWHERE = [
  { label: "GitHub", href: "https://github.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Behance", href: "https://behance.net", external: true },
  { label: "Email", href: "mailto:khaledammartz@gmail.com", external: false },
];

/* -------------------------------------------------------------------------- */
/*  Illustration data – the golden tree (generated once, same on server+client) */
/* -------------------------------------------------------------------------- */

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type TreeLeaf = { x: number; y: number; r: number; s: number; v: 1 | 2 | 3 };

const RAW_BRANCHES = [
  // Main left and right branches
  {
    d: "M1168 262 C1140 252 1100 240 1070 205",
    w: 7, pivot: [1168, 262], tip: [1070, 205],
    n: 25, amp: 1.4, dur: 7.5,
  },
  {
    d: "M1180 250 C1215 242 1260 228 1290 196",
    w: 7, pivot: [1180, 250], tip: [1290, 196],
    n: 25, amp: 1.5, dur: 8.5,
  },

  // Upper-middle branches
  {
    d: "M1163 215 C1140 195 1120 175 1100 140",
    w: 6, pivot: [1163, 215], tip: [1100, 140],
    n: 22, amp: 1.8, dur: 6.5,
  },
  {
    d: "M1172 200 C1200 185 1228 160 1250 128",
    w: 6, pivot: [1172, 200], tip: [1250, 128],
    n: 22, amp: 1.9, dur: 7.2,
  },

  // Top branches
  {
    d: "M1160 180 C1156 150 1162 120 1172 92",
    w: 6, pivot: [1160, 180], tip: [1172, 92],
    n: 20, amp: 2.2, dur: 6.8,
  },
  {
    d: "M1158 175 C1148 150 1138 125 1130 100",
    w: 4, pivot: [1158, 175], tip: [1130, 100],
    n: 16, amp: 2.4, dur: 5.8,
  },
  {
    d: "M1164 170 C1185 150 1200 125 1215 98",
    w: 4, pivot: [1164, 170], tip: [1215, 98],
    n: 16, amp: 2.4, dur: 6.2,
  },

  // Additional left-side branches
  {
    d: "M1168 270 C1135 275 1100 270 1060 250",
    w: 5, pivot: [1168, 270], tip: [1060, 250],
    n: 20, amp: 1.7, dur: 8.1,
  },
  {
    d: "M1150 235 C1115 225 1085 205 1050 175",
    w: 5, pivot: [1150, 235], tip: [1050, 175],
    n: 20, amp: 1.8, dur: 7.4,
  },
  {
    d: "M1140 205 C1110 185 1090 155 1078 125",
    w: 4, pivot: [1140, 205], tip: [1078, 125],
    n: 18, amp: 2.0, dur: 6.7,
  },
  {
    d: "M1138 180 C1110 155 1090 130 1080 95",
    w: 4, pivot: [1138, 180], tip: [1080, 95],
    n: 17, amp: 2.1, dur: 6.4,
  },
  {
    d: "M1150 155 C1130 125 1115 100 1110 70",
    w: 4, pivot: [1150, 155], tip: [1110, 70],
    n: 16, amp: 2.2, dur: 6.1,
  },

  // Additional right-side branches
  {
    d: "M1180 275 C1215 278 1255 265 1300 245",
    w: 5, pivot: [1180, 275], tip: [1300, 245],
    n: 21, amp: 1.6, dur: 8.3,
  },
  {
    d: "M1195 235 C1230 220 1265 200 1305 170",
    w: 5, pivot: [1195, 235], tip: [1305, 170],
    n: 20, amp: 1.8, dur: 7.6,
  },
  {
    d: "M1190 205 C1220 180 1250 150 1275 115",
    w: 4, pivot: [1190, 205], tip: [1275, 115],
    n: 18, amp: 2.0, dur: 6.9,
  },
  {
    d: "M1180 170 C1205 140 1230 115 1245 80",
    w: 4, pivot: [1180, 170], tip: [1245, 80],
    n: 17, amp: 2.2, dur: 6.5,
  },
  {
    d: "M1175 145 C1195 115 1205 90 1205 60",
    w: 4, pivot: [1175, 145], tip: [1205, 60],
    n: 16, amp: 2.3, dur: 6.0,
  },

  // Short inner branches to fill gaps
  {
    d: "M1160 245 C1140 230 1125 215 1115 195",
    w: 3, pivot: [1160, 245], tip: [1115, 195],
    n: 12, amp: 1.5, dur: 5.7,
  },
  {
    d: "M1180 225 C1200 210 1215 190 1225 170",
    w: 3, pivot: [1180, 225], tip: [1225, 170],
    n: 12, amp: 1.6, dur: 5.9,
  },
];


const BRANCHES = RAW_BRANCHES.map((b, i) => {
  const r = rng(101 + i * 17);
  const leaves: TreeLeaf[] = [];

  for (let k = 0; k < b.n; k++) {
    // Spread leaves across more of each branch, not just its tip.
    const t = 0.2 + r() * 0.8;

    const bx = b.pivot[0] + (b.tip[0] - b.pivot[0]) * t;
    const by = b.pivot[1] + (b.tip[1] - b.pivot[1]) * t;

    const ang = r() * Math.PI * 2;

    // A slightly wider distribution fills the bare branch edges.
    const rad = r() * (18 + t * 26);

    leaves.push({
      x: +(bx + Math.cos(ang) * rad).toFixed(1),
      y: +(by + Math.sin(ang) * rad).toFixed(1),
      r: +(
        (ang * 180) / Math.PI +
        90 +
        (r() - 0.5) * 50
      ).toFixed(0),
      s: +(0.65 + r() * 0.55).toFixed(2),
      v: (1 + Math.floor(r() * 3)) as 1 | 2 | 3,
    });
  }

  return {
    ...b,
    delay: -(i * 1.3),
    leaves,
  };
});


/* leaves that detach from the canopy and drift down to the ground */
const DROPS = [
  { x: 1090, y: 215, dy: 155, dx: 46, dur: 11, delay: -2, v: 1 },
  { x: 1270, y: 200, dy: 170, dx: -52, dur: 13, delay: -7, v: 2 },
  { x: 1120, y: 150, dy: 220, dx: 64, dur: 15, delay: -11, v: 3 },
  { x: 1235, y: 140, dy: 230, dx: -40, dur: 12, delay: -4, v: 1 },
];

/* leaves already resting on the ground (drawn flattened) */
const GROUND_LEAVES: TreeLeaf[] = [
  { x: 1010, y: 380, r: 70, s: 0.8, v: 1 },
  { x: 1090, y: 388, r: -30, s: 0.7, v: 2 },
  { x: 1150, y: 376, r: 120, s: 0.9, v: 3 },
  { x: 1235, y: 384, r: 10, s: 0.8, v: 1 },
  { x: 1310, y: 378, r: -80, s: 0.7, v: 2 },
  { x: 1390, y: 390, r: 40, s: 0.9, v: 3 },
  { x: 820, y: 386, r: -50, s: 0.7, v: 2 },
  { x: 560, y: 380, r: 100, s: 0.6, v: 1 },
  { x: 300, y: 388, r: 20, s: 0.7, v: 3 },
];

/* -------------------------------------------------------------------------- */
/*  Styles – theme tokens + motion                                            */
/*  Gold is a fill in both modes; as TEXT it darkens in light mode so it stays  */
/*  readable (#D4AF37 on white is only 2.1:1).                                 */
/* -------------------------------------------------------------------------- */

const DARK_TOKENS = `
  --ft-bg: #0b0b0f;
  --ft-ink: #ffffff;
  --ft-muted: #a1a1aa;
  --ft-line: rgba(255, 255, 255, 0.12);
  --ft-line-strong: rgba(255, 255, 255, 0.3);
  --ft-accent: #d4af37;
  --ft-accent-hover: #e6c65a;
  --ft-on-accent: #0b0b0f;
  --ft-accent-text: #d4af37;
  --ft-accent-line: #d4af37;
  --ft-accent-wash: rgba(212, 175, 55, 0.12);
  --ft-ring: #ffffff;
  --ft-hill-far: #13110a;
  --ft-hill-mid: #181408;
  --ft-ground: #1d180a;
  --ft-trunk: #4a3a17;
  --ft-leaf-1: #d4af37;
  --ft-leaf-2: #e9c85a;
  --ft-leaf-3: #b08a1f;
  --ft-vein: rgba(60, 40, 0, 0.4);
  --ft-glow: #d4af37;
  --ft-glow-a: 0.22;
`;

const CSS = `
.ft {
  --p: 1;
  --ft-bg: #f7f5f0;
  --ft-ink: #16161a;
  --ft-muted: #55514a;
  --ft-line: #ddd8cc;
  --ft-line-strong: #8f897c;
  --ft-accent: #d4af37;
  --ft-accent-hover: #e6c65a;
  --ft-on-accent: #0b0b0f;
  --ft-accent-text: #7a5c00;
  --ft-accent-line: #a67f12;
  --ft-accent-wash: rgba(166, 127, 18, 0.12);
  --ft-ring: #16161a;
  --ft-hill-far: #f0ead8;
  --ft-hill-mid: #e9e0c4;
  --ft-ground: #e2d6b0;
  --ft-trunk: #6b5426;
  --ft-leaf-1: #c99a21;
  --ft-leaf-2: #ddb540;
  --ft-leaf-3: #a87b10;
  --ft-vein: rgba(70, 45, 0, 0.35);
  --ft-glow: #d4af37;
  --ft-glow-a: 0.35;

  position: relative;
  overflow: hidden;
  background: var(--ft-bg);
  color: var(--ft-ink);
}
@media (prefers-color-scheme: dark) {
  .ft[data-theme="system"]:not(:is(.light, [data-theme="light"]) *) { ${DARK_TOKENS} }
}
.dark .ft[data-theme="system"],
[data-theme="dark"] .ft[data-theme="system"],
.ft[data-theme="dark"] { ${DARK_TOKENS} }

.ft-muted { color: var(--ft-muted); }

/* ---------- reveal on scroll (only hidden once JS is running) ---------- */
.ft[data-ready="true"] .ft-rise {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .7s ease, transform .7s cubic-bezier(.2, .7, .2, 1);
  transition-delay: calc(var(--i, 0) * 90ms);
}
.ft[data-ready="true"][data-in="true"] .ft-rise { opacity: 1; transform: none; }

/* ---------- links ---------- */
.ft-link {
  position: relative; display: inline-flex; align-items: center; gap: .4rem;
  padding: .35rem 0; font-size: 1rem; color: var(--ft-ink); text-decoration: none;
  transition: color .2s;
}
.ft-link::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: .15rem; height: 1px;
  background: currentColor; transform: scaleX(0); transform-origin: left; transition: transform .3s ease;
}
.ft-link:hover { color: var(--ft-accent-text); }
.ft-link:hover::after { transform: scaleX(1); }
.ft-link:active { transform: translateY(1px); }
.ft-arrow { transition: transform .25s ease; }
.ft-link:hover .ft-arrow { transform: translate(2px, -2px); }

.ft-link:focus-visible, .ft-cta:focus-visible, .ft-top:focus-visible {
  outline: 2px solid var(--ft-ring); outline-offset: 4px; border-radius: 6px;
}

/* ---------- call to action ---------- */
.ft-cta {
  display: inline-flex; align-items: center; gap: .75rem; height: 3.5rem; padding: 0 2rem;
  border-radius: 999px; background: var(--ft-accent); color: var(--ft-on-accent);
  font-size: 1rem; font-weight: 500; text-decoration: none;
  transition: background-color .2s, transform .15s;
}
.ft-cta:hover { background: var(--ft-accent-hover); }
.ft-cta:active { transform: scale(.97); }
.ft-cta-arrow { transition: transform .25s ease; }
.ft-cta:hover .ft-cta-arrow { transform: translateX(4px); }

/* ---------- bottom bar ---------- */
.ft-bar { background: var(--ft-ground); margin-top: -1px; }
.ft-top {
  display: inline-flex; align-items: center; gap: .6rem; height: 2.75rem; padding: 0 1.1rem 0 .9rem;
  border-radius: 999px; border: 1px solid var(--ft-line-strong); background: transparent;
  color: var(--ft-ink); font: inherit; font-size: .875rem; font-weight: 500; cursor: pointer;
  transition: border-color .2s, background-color .2s, transform .15s;
}
.ft-top:hover { border-color: var(--ft-accent-line); background: var(--ft-accent-wash); }
.ft-top:active { transform: scale(.96); }
.ft-top svg { transition: transform .25s ease; }
.ft-top:hover svg { transform: translateY(-3px); }
.ft-heart { display: inline-block; transform-origin: center; animation: ft-beat 1.8s ease-in-out infinite; }

/* ---------- illustration ---------- */
.ft-scene { position: relative; margin-bottom: -1px; }

.ft-px-far  { translate: 0 calc((1 - var(--p)) * 14px); }
.ft-px-mid  { translate: 0 calc((1 - var(--p)) * 26px); }
.ft-px-tree { translate: 0 calc((1 - var(--p)) * 44px); }

.ft-sway {
  transform-box: view-box;
  transform-origin: var(--ox) var(--oy);
  animation: ft-sway var(--dur) ease-in-out var(--delay) infinite alternate;
}
.ft-pulse {
  transform-box: fill-box; transform-origin: center;
  animation: ft-pulse 6s ease-in-out infinite alternate;
}
.ft-drop  { animation: ft-drop var(--dur) linear var(--delay) infinite; }
.ft-drift { animation: ft-drift 3.4s ease-in-out infinite alternate; }
.ft-flip  { transform-box: fill-box; transform-origin: center; animation: ft-flip 5s linear infinite; }

@keyframes ft-sway  { from { transform: rotate(calc(var(--amp) * -1deg)); } to { transform: rotate(calc(var(--amp) * 1deg)); } }
@keyframes ft-pulse { from { opacity: .7; scale: 1; } to { opacity: 1; scale: 1.07; } }
@keyframes ft-drop  {
  0%   { translate: 0 0; opacity: 0; }
  8%   { opacity: 1; }
  88%  { opacity: 1; }
  100% { translate: 0 var(--dy); opacity: 0; }
}
@keyframes ft-drift { from { translate: calc(var(--dx) * -.5) 0; } to { translate: var(--dx) 0; } }
@keyframes ft-flip  { from { rotate: 0deg; } to { rotate: 360deg; } }
@keyframes ft-beat  { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.22); } }

@media (prefers-reduced-motion: reduce) {
  .ft-sway, .ft-pulse, .ft-drift, .ft-flip, .ft-heart { animation: none; }
  .ft-drop { display: none; }
  .ft-px-far, .ft-px-mid, .ft-px-tree { translate: none; }
  .ft[data-ready="true"] .ft-rise { opacity: 1; transform: none; transition: none; }
  .ft-link, .ft-cta, .ft-top, .ft-arrow, .ft-cta-arrow, .ft-top svg { transition: none; }
}
`;

/* -------------------------------------------------------------------------- */
/*  Small pieces                                                              */
/* -------------------------------------------------------------------------- */

const ArrowUpRight = () => (
  <svg className="ft-arrow" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l6-6M4 3h5v5" />
  </svg>
);

const LeafUse = ({ l, flat = false }: { l: TreeLeaf; flat?: boolean }) => (
  <use
    href="#ft-leaf"
    style={{ fill: `var(--ft-leaf-${l.v})` }}
    transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s} ${flat ? +(l.s * 0.55).toFixed(2) : l.s})`}
  />
);

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function Footer({
  theme = "system",
}: {
  /** "system" follows the OS (and a .dark / data-theme="dark" ancestor). Or force "light" / "dark". */
  theme?: "system" | "light" | "dark";
}) {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setReady(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    // 0 → 1 as the footer scrolls into view; drives the parallax rise of the hills and tree
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / Math.max(r.height, 1)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });

  const rise = (i: number) => ({ "--i": i }) as CSSProperties;

  return (
    <footer ref={ref} id="footer" className="ft" data-theme={theme} data-ready={ready} data-in={inView}>
      <style>{CSS}</style>

      {/* ================= TOP: invitation + links ================= */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 className="ft-rise max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl" style={rise(0)}>
              Got an idea? Let&apos;s{" "}
              <span style={{ color: "var(--ft-accent-text)" }}>grow it together.</span>
            </h2>

            <p className="ft-rise ft-muted mt-6 max-w-md text-base leading-7" style={rise(1)}>
              {CONFIG.tagline}
            </p>

            <div className="ft-rise mt-9" style={rise(2)}>
              <Link href="#contact" className="ft-cta">
                Start a conversation
                <svg className="ft-cta-arrow" aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9h12M10 4l5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 lg:pt-3">
            <div className="ft-rise" style={rise(3)}>
              <h3 className="ft-muted text-sm font-medium">Explore</h3>
              <ul className="mt-3 flex flex-col">
                {EXPLORE.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="ft-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ft-rise" style={rise(4)}>
              <h3 className="ft-muted text-sm font-medium">Elsewhere</h3>
              <ul className="mt-3 flex flex-col">
                {ELSEWHERE.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="ft-link"
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {l.label}
                      {l.external && (
                        <>
                          <ArrowUpRight />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* ================= ILLUSTRATION: the golden tree ================= */}
      <div className="ft-scene mt-16 h-57.5 sm:h-75 lg:h-auto lg:max-h-160 lg:aspect-1440/400">
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMaxYMax slice"
          aria-hidden="true"
          focusable="false"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <g id="ft-leaf">
              <path d="M0 -16C7.5 -8.5 10 1.5 0 15 -10 1.5 -7.5 -8.5 0 -16Z" />
              <path d="M0 -10V13" fill="none" strokeWidth="1" strokeLinecap="round" style={{ stroke: "var(--ft-vein)" }} />
            </g>
            <radialGradient id="ft-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0" style={{ stopColor: "var(--ft-glow)", stopOpacity: "var(--ft-glow-a)" }} />
              <stop offset="1" style={{ stopColor: "var(--ft-glow)", stopOpacity: 0 }} />
            </radialGradient>
          </defs>

          {/* soft light behind the tree */}
          <g className="ft-pulse">
            <circle cx="1175" cy="185" r="190" fill="url(#ft-glow)" />
          </g>

          {/* far + mid hills */}
          <g className="ft-px-far">
            <path
              fill="var(--ft-hill-far)"
              d="M0 300 C200 260 380 290 560 275 C760 258 900 300 1100 285 C1250 275 1350 290 1440 280 V400 H0Z"
            />
          </g>
          <g className="ft-px-mid">
            <path
              fill="var(--ft-hill-mid)"
              d="M0 335 C220 305 420 330 640 318 C860 305 1020 335 1240 322 C1330 316 1400 322 1440 318 V400 H0Z"
            />
          </g>

          {/* tree */}
          <g className="ft-px-tree">
            <path
              fill="var(--ft-trunk)"
              d="M1156 362 C1164 322 1166 290 1163 252 C1161 220 1156 196 1152 170 L1166 168 C1172 196 1180 222 1184 254 C1190 292 1192 326 1204 362 Z"
            />

            {BRANCHES.map((b, i) => (
              <g
                key={i}
                className="ft-sway"
                style={
                  {
                    "--ox": `${b.pivot[0]}px`,
                    "--oy": `${b.pivot[1]}px`,
                    "--amp": b.amp,
                    "--dur": `${b.dur}s`,
                    "--delay": `${b.delay}s`,
                  } as CSSProperties
                }
              >
                <path d={b.d} fill="none" strokeLinecap="round" strokeWidth={b.w} style={{ stroke: "var(--ft-trunk)" }} />
                {b.leaves.map((l, k) => (
                  <LeafUse key={k} l={l} />
                ))}
              </g>
            ))}

            {/* leaves letting go of the canopy */}
            {DROPS.map((d, i) => (
              <g key={i} transform={`translate(${d.x} ${d.y})`}>
                <g
                  className="ft-drop"
                  style={{ "--dy": `${d.dy}px`, "--dur": `${d.dur}s`, "--delay": `${d.delay}s` } as CSSProperties}
                >
                  <g className="ft-drift" style={{ "--dx": `${d.dx}px` } as CSSProperties}>
                    <g className="ft-flip">
                      <use href="#ft-leaf" style={{ fill: `var(--ft-leaf-${d.v})` }} transform="scale(.9)" />
                    </g>
                  </g>
                </g>
              </g>
            ))}
          </g>

          {/* front ground (same colour as the bottom bar) + fallen leaves */}
          <path
            fill="var(--ft-ground)"
            d="M0 365 C260 345 520 368 780 358 C1040 348 1250 368 1440 356 V400 H0Z"
          />
          {GROUND_LEAVES.map((l, i) => (
            <LeafUse key={i} l={l} flat />
          ))}
        </svg>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="ft-bar">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-4 py-6 text-sm sm:px-6 lg:px-8">
          <p className="ft-muted flex flex-wrap items-center gap-x-1.5">
            <span>Made with</span>
            <svg className="ft-heart" aria-label="love" role="img" width="14" height="14" viewBox="0 0 24 24" fill="var(--ft-accent-text)">
              <path d="M12 21s-6.7-4.35-9.33-8.2C-.43 8.12 1.5 3 6 3c2.1 0 4 1.2 5 3 1-1.8 2.9-3 5-3 4.5 0 6.43 5.12 3.33 9.8C18.7 16.65 12 21 12 21z" />
            </svg>
            <span>
              by {CONFIG.name} © {new Date().getFullYear()}
            </span>
          </p>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="ft-link ft-muted" style={{ fontSize: ".875rem" }}>
              Privacy
            </Link>
            <button type="button" className="ft-top" onClick={toTop}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
              </svg>
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}