"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const COUNT_DESKTOP = 12;
const COUNT_MOBILE = 7;

const SLOWEST = 28;
const FASTEST = 62;
const MAX_OPACITY = 0.85;
const Z_INDEX = 40;

type GoldenLeavesProps = {
  /** CSS selector of the section used as the starting reference. */
  startSelector?: string;

  /** Starting position inside the target section: 0 = top, 0.5 = middle, 1 = bottom. */
  startAt?: number;
};

type Leaf = {
  id: number;
  left: number;
  size: number;
  fall: number;
  delay: number;
  sway: number;
  swayDur: number;
  spinDur: number;
  tilt: number;
  spin: number;
  opacity: number;
  shade: "a" | "b" | "c";
};

const rand = (min: number, max: number) =>
  min + Math.random() * (max - min);

function makeLeaves(count: number, viewportHeight: number): Leaf[] {
  const shades: Leaf["shade"][] = ["a", "b", "c"];

  return Array.from({ length: count }, (_, id) => {
    const depth = Math.random();
    const speed = SLOWEST + depth * (FASTEST - SLOWEST);
    const fall = (viewportHeight + 120) / speed;

    return {
      id,
      left: rand(-2, 100),
      size: 12 + depth * 20,
      fall,
      delay: -rand(0, fall),
      sway: rand(18, 60),
      swayDur: rand(4, 8),
      spinDur: rand(6, 14),
      tilt: rand(-40, 40),
      spin: Math.random() > 0.5 ? 90 : -90,
      opacity: 0.35 + depth * (MAX_OPACITY - 0.35),
      shade: shades[Math.floor(Math.random() * shades.length)],
    };
  });
}

/* -------------------------------------------------------------------------- */
/* Animation CSS                                                              */
/* -------------------------------------------------------------------------- */

const CSS = `
/*
  The layer is pinned to the viewport (position: fixed), so leaves always fall
  downward relative to the screen. Scrolling no longer makes them drift upward,
  including while the Achievement section is pinned.
*/
.gl-layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: ${Z_INDEX};
}

.gl-fall {
  position: absolute;
  top: 0;
  will-change: transform, translate;
  animation:
    gl-fall var(--fall) linear var(--delay) infinite,
    gl-sway var(--swayDur) ease-in-out infinite alternate;
}

.gl-spin {
  width: 100%;
  height: 100%;
  animation: gl-spin var(--spinDur) linear infinite;
}

.gl-spin svg {
  display: block;
  width: 100%;
  height: 100%;
}

@keyframes gl-fall {
  from { translate: 0 -60px; }
  to   { translate: 0 var(--h); }
}

@keyframes gl-sway {
  from { transform: translate3d(calc(var(--sway) * -1), 0, 0); }
  to   { transform: translate3d(var(--sway), 0, 0); }
}

@keyframes gl-spin {
  from { transform: rotate(var(--tilt)) rotateY(0deg); }
  to {
    transform:
      rotate(calc(var(--tilt) + var(--spin)))
      rotateY(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .gl-layer {
    display: none;
  }
}
`;

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function GoldenLeaves({
  startSelector,
  startAt = 0,
}: GoldenLeavesProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const built = useRef({ height: 0, mobile: false });

  const [viewportHeight, setViewportHeight] = useState(0);
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const layer = layerRef.current;
    const parent = layer?.parentElement;

    if (!layer || !parent) return;

    const target = startSelector
      ? document.querySelector<HTMLElement>(startSelector)
      : null;

    let raf = 0;

    /* Show the leaves only between the start point and the end of the
       page wrapper, by clipping the fixed layer. */
    const clip = () => {
      raf = 0;

      const vh = window.innerHeight;
      const parentRect = parent.getBoundingClientRect();

      let startY = parentRect.top;

      if (target) {
        const t = target.getBoundingClientRect();
        const position = Math.max(0, Math.min(1, startAt));
        startY = t.top + t.height * position;
      }

      const top = Math.max(0, Math.min(vh, startY));
      const bottom = Math.max(0, Math.min(vh, vh - parentRect.bottom));

      layer.style.clipPath =
        top + bottom >= vh
          ? "inset(100%)"
          : `inset(${top.toFixed(1)}px 0 ${bottom.toFixed(1)}px 0)`;
    };

    const requestClip = () => {
      if (!raf) raf = requestAnimationFrame(clip);
    };

    const rebuild = () => {
      const vh = window.innerHeight;
      const mobile = window.innerWidth < 640;
      const previous = built.current;

      setViewportHeight(vh);

      const heightChanged =
        Math.abs(vh - previous.height) / Math.max(previous.height, 1) > 0.3;

      if (
        previous.height === 0 ||
        mobile !== previous.mobile ||
        heightChanged
      ) {
        built.current = { height: vh, mobile };

        setLeaves(
          makeLeaves(mobile ? COUNT_MOBILE : COUNT_DESKTOP, vh),
        );
      }

      requestClip();
    };

    rebuild();

    const observer = new ResizeObserver(rebuild);
    observer.observe(parent);

    if (target) observer.observe(target);

    window.addEventListener("scroll", requestClip, { passive: true });
    window.addEventListener("resize", rebuild);
    window.addEventListener("load", rebuild);

    return () => {
      observer.disconnect();

      window.removeEventListener("scroll", requestClip);
      window.removeEventListener("resize", rebuild);
      window.removeEventListener("load", rebuild);

      if (raf) cancelAnimationFrame(raf);
    };
  }, [startSelector, startAt]);

  return (
    <div
      ref={layerRef}
      className="gl-layer"
      aria-hidden="true"
      style={
        {
          height: `${viewportHeight}px`,
          clipPath: "inset(100%)",
          "--h": `${viewportHeight}px`,
        } as CSSProperties
      }
    >
      <style>{CSS}</style>

      {/* Shared gold gradients */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        style={{ position: "absolute" }}
        focusable="false"
      >
        <defs>
          <linearGradient id="gl-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F6E27A" />
            <stop offset=".55" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#9A7414" />
          </linearGradient>

          <linearGradient id="gl-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E9C85A" />
            <stop offset=".55" stopColor="#C79A21" />
            <stop offset="1" stopColor="#7D5A0B" />
          </linearGradient>

          <linearGradient id="gl-c" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFF0A8" />
            <stop offset=".55" stopColor="#E2BC45" />
            <stop offset="1" stopColor="#B08A1F" />
          </linearGradient>
        </defs>
      </svg>

      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="gl-fall"
          style={
            {
              left: `${leaf.left}%`,
              width: leaf.size,
              height: leaf.size * 1.35,
              opacity: leaf.opacity,
              "--fall": `${leaf.fall}s`,
              "--delay": `${leaf.delay}s`,
              "--sway": `${leaf.sway}px`,
              "--swayDur": `${leaf.swayDur}s`,
            } as CSSProperties
          }
        >
          <div
            className="gl-spin"
            style={
              {
                "--tilt": `${leaf.tilt}deg`,
                "--spin": `${leaf.spin}deg`,
                "--spinDur": `${leaf.spinDur}s`,
              } as CSSProperties
            }
          >
            <svg viewBox="0 0 24 32" focusable="false">
              <path
                d="M12 1C19.5 8.5 22 18.5 12 31 2 18.5 4.5 8.5 12 1Z"
                fill={`url(#gl-${leaf.shade})`}
              />

              <path
                d="M12 6V29M12 12l4-3M12 17l5-3.5M12 22l4-3M12 12l-4-3M12 17l-5-3.5M12 22l-4-3"
                fill="none"
                stroke="rgba(90,60,0,0.45)"
                strokeWidth=".6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}