"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const GOLD = "#D4AF37";
const GOLD_INK = "color-mix(in srgb, #D4AF37 62%, var(--foreground))";
const HAIR = "color-mix(in srgb, var(--foreground) 16%, transparent)";
const BORDER = "var(--achievement-border, rgba(128,128,128,0.2))";

const STATEMENT = "Every milestone is another step forward.";
const WORDS = STATEMENT.split(" ");
const GOLD_WORDS = 2;

const ACHIEVEMENTS = [
  {
    number: "01",
    year: "2024",
    category: "EDUCATION",
    title: "Academic Journey",
    description:
      "Building a strong foundation in computer science and problem-solving.",
    accent: "#D4AF37",
  },
  {
    number: "02",
    year: "2025",
    category: "DEVELOPMENT",
    title: "Frontend Development",
    description:
      "Creating responsive web experiences with modern frontend technologies.",
    accent: "#A78BFA",
  },
  {
    number: "03",
    year: "2025",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Machine Learning",
    description:
      "Exploring computer vision, deep learning, and intelligent systems.",
    accent: "#67D5C0",
  },
  {
    number: "04",
    year: "2025",
    category: "RESEARCH",
    title: "Research & Innovation",
    description:
      "Turning technical ideas into experiments, projects, and meaningful solutions.",
    accent: "#F59EAE",
  },
  {
    number: "05",
    year: "2026",
    category: "DESIGN",
    title: "UI/UX Design",
    description:
      "Combining visual design, usability, and interaction to create thoughtful products.",
    accent: "#60A5FA",
  },
  {
    number: "06",
    year: "2026",
    category: "CREATIVE TECHNOLOGY",
    title: "Ideas into Reality",
    description:
      "Bringing design and technology together to create useful, engaging digital experiences.",
    accent: "#FB923C",
  },
  {
    number: "07",
    year: "ONGOING",
    category: "THE JOURNEY CONTINUES",
    title: "Still learning. Always growing.",
    description:
      "Open to new challenges, meaningful collaborations, and opportunities to build something extraordinary.",
    accent: "#D4AF37",
  },
];

const LAST = ACHIEVEMENTS.length - 1;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export default function Achievement() {
  const rootRef = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  /* ---------- Scroll progress -> CSS variables ---------- */
  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!root || !track) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let prevIndex = -1;

    const update = () => {
      raf = 0;

      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const rect = root.getBoundingClientRect();

      /* Heading reveal: plays while the section scrolls into view */
      statementRef.current?.style.setProperty(
        "--p",
        reduce ? "1" : clamp((vh * 0.9 - rect.top) / (vh * 0.9)).toFixed(3)
      );

      /* Horizontal progress while the section is pinned */
      const scrollDistance = root.offsetHeight - vh;
      if (scrollDistance <= 0) return;

      const cp = clamp(-rect.top / scrollDistance);
      root.style.setProperty("--cp", cp.toFixed(4));

      const maxTranslate = Math.max(0, track.scrollWidth - vw);
      track.style.transform = `translate3d(${-cp * maxTranslate}px, 0, 0)`;

      /* Card proximity to the viewport center drives opacity / scale */
      let best = 0;
      let bestA = -1;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;

        const r = el.getBoundingClientRect();
        const center = r.left + r.width / 2;

        const a = reduce
          ? 1
          : clamp(1 - Math.abs(center - vw * 0.5) / (vw * 0.5));

        el.style.setProperty("--a", a.toFixed(3));

        const nearest = 1 - Math.abs(center - vw * 0.5) / (vw * 0.5);
        if (nearest > bestA) {
          bestA = nearest;
          best = i;
        }
      });

      if (best !== prevIndex) {
        prevIndex = best;
        setActive(best);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="achievements"
      className="relative w-full"
      style={{
        height: `${ACHIEVEMENTS.length * 100}svh`,
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Background glow */}
      

      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        {/* ================= HEADING ================= */}
        <div className="relative z-10 mb-8 w-full px-4 sm:mb-10 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex items-end justify-between gap-6">
            <div className="min-w-0">
              <p
                className="mb-4 text-xs font-medium uppercase tracking-[0.3em]"
                style={{ color: GOLD }}
              >
                Achievements
              </p>

              {/* Scroll-animated statement */}
              <h2
                ref={statementRef}
                className="font-bold leading-[1.12] tracking-tight text-(--foreground)"
                style={
                  {
                    fontSize: "clamp(2rem, 3vw + 1rem, 3.75rem)",
                    "--n": WORDS.length,
                  } as CSSProperties
                }
              >
                {WORDS.map((w, i) => (
                  <span
                    key={i}
                    className="mr-[.25em] inline-block"
                    style={
                      {
                        "--i": i,
                        opacity:
                          "calc(.16 + clamp(0, calc(var(--p, 0) * var(--n) - var(--i)), 1) * .84)",
                        color:
                          i >= WORDS.length - GOLD_WORDS
                            ? GOLD_INK
                            : undefined,
                      } as CSSProperties
                    }
                  >
                    {w}
                  </span>
                ))}
              </h2>
            </div>

            {/* Large counter */}
            <div
              className="hidden shrink-0 items-baseline gap-2 sm:flex"
              aria-live="off"
            >
              <span
                key={active}
                className="text-5xl font-light tabular-nums lg:text-6xl"
                style={{ color: ACHIEVEMENTS[active].accent }}
              >
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="text-sm tabular-nums opacity-40">
                / {String(ACHIEVEMENTS.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* ================= HORIZONTAL TRACK ================= */}
        <div className="relative z-10 w-full overflow-visible">
          <div
            ref={trackRef}
            className="flex w-max gap-3 will-change-transform"
            style={{
              paddingLeft: "max(20px, calc((100vw - 470px) / 2))",
              paddingRight: "max(20px, calc((100vw - 470px) / 2))",
              transform: "translate3d(0, 0, 0)",
            }}
          >
            {ACHIEVEMENTS.map((item, index) => {
              const isFinalCard = index === LAST;

              const reveal: CSSProperties = {
                opacity: "calc(.22 + var(--a, 0) * .78)",
                transform: "scale(calc(.94 + var(--a, 0) * .06))",
              };

              /* Final card: minimalist, text-only ending */
              if (isFinalCard) {
                return (
                  <article
                    key={item.number}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="flex aspect-square w-[min(82vw,470px)] shrink-0 flex-col justify-center px-6 sm:px-10"
                    style={reveal}
                  >
                    <p
                      className="mb-6 text-xs font-medium uppercase tracking-[0.3em]"
                      style={{ color: GOLD }}
                    >
                      {item.category}
                    </p>

                    <h3 className="max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                      Still learning.
                      <br />
                      <span style={{ color: GOLD }}>Always growing.</span>
                    </h3>

                    <p className="mt-6 max-w-sm text-sm leading-7 opacity-55 sm:text-base">
                      {item.description}
                    </p>
                  </article>
                );
              }

              /* Cards 1-6: square, no corner radius */
              return (
                <article
                  key={item.number}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="group relative flex aspect-square w-[min(82vw,470px)] shrink-0 flex-col justify-between overflow-hidden rounded-none border p-6 transition-[border-color,background-color] duration-500 hover:bg-white/2.5 sm:p-9"
                  style={{
                    ...reveal,
                    borderColor:
                      active === index ? `${item.accent}80` : BORDER,
                    background: "var(--achievement-card, var(--background))",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-[0.06] blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-20"
                    style={{ background: item.accent }}
                  />

                  {/* Top row */}
                  <div className="relative flex items-center justify-between gap-3">
                    <span
                      className="text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.25em]"
                      style={{ color: item.accent }}
                    >
                      {item.category}
                    </span>

                    <span className="shrink-0 text-xs opacity-50">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-none border transition-all duration-500 sm:mb-6 sm:h-16 sm:w-16"
                      style={{
                        borderColor: `${item.accent}70`,
                        color: active === index ? "#0B0B0F" : item.accent,
                        background:
                          active === index ? item.accent : "transparent",
                      }}
                    >
                      <span className="text-xl font-light sm:text-2xl">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="max-w-sm text-3xl font-medium leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 opacity-60 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom row */}
                  <div
                    className="relative flex items-center justify-between border-t pt-4 sm:pt-5"
                    style={{ borderColor: HAIR }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] opacity-45 sm:text-xs">
                      Milestone
                    </span>

                    <span
                      className="text-2xl transition-transform duration-300 group-hover:translate-x-2"
                      style={{ color: item.accent }}
                    >
                      ↗
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ================= PROGRESS ================= */}
        <div className="relative z-10 mt-7 flex w-full items-center gap-5 px-4 sm:mt-9 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="flex flex-1 gap-2">
            {ACHIEVEMENTS.map((item, index) => (
              <div
                key={item.number}
                className="h-0.75 flex-1 overflow-hidden"
                style={{ background: BORDER }}
              >
                <div
                  className="h-full origin-left"
                  style={{
                    background: item.accent,
                    width: `calc(clamp(0, var(--cp, 0) * ${LAST} - ${
                      index - 1
                    }, 1) * 100%)`,
                  }}
                />
              </div>
            ))}
          </div>

          <span className="shrink-0 font-mono text-xs opacity-50 sm:hidden">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(ACHIEVEMENTS.length).padStart(2, "0")}
          </span>
        </div>

        <p
          className="relative z-10 mt-5 text-center text-[10px] uppercase tracking-[0.25em] opacity-40"
          style={{ opacity: "calc(.4 - var(--cp, 0) * 8)" }}
        >
          Scroll to explore
        </p>
      </div>
    </section>
  );
}