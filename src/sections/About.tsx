"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { Code2, Film, PenTool, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GOLD = "#D4AF37";
const MUTED = "color-mix(in srgb, var(--foreground) 68%, transparent)";
const GOLD_INK = "color-mix(in srgb, #D4AF37 62%, var(--foreground))";
const HAIR = "color-mix(in srgb, var(--foreground) 16%, transparent)";

const STATEMENT =
  "I'm Khaled Ammar, a UI/UX designer and frontend developer who turns complex ideas into simple, meaningful experiences.";

const WORDS = STATEMENT.split(" ");
const GOLD_WORDS = 3;

const SKILLS = [
  {
    title: "UI/UX Design",
    text: "Clear, usable interfaces shaped around real people.",
    Icon: PenTool,
  },
  {
    title: "Frontend Development",
    text: "Fast, responsive builds with modern web tools.",
    Icon: Code2,
  },
  {
    title: "Motion Graphic Design",
    text: "Movement that explains ideas and adds personality.",
    Icon: Film,
  },
  {
    title: "AI Exploration",
    text: "Testing new tools to work smarter and build better.",
    Icon: Sparkles,
  },
];

const clamp = (v: number, a = 0, b = 1) =>
  Math.min(b, Math.max(a, v));

export default function About() {
  const rootRef = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const chapterRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  /* ---------- Scroll progress -> CSS variables ---------- */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;

    const finish = () => {
      root.style.setProperty("--sp", "0.5");
      root.style.setProperty("--pe", "1");
      root.style.setProperty("--cp", "1");
      root.style.setProperty("--ring-offset", "0");

      statementRef.current?.style.setProperty("--p", "1");

      chapterRefs.current.forEach((el) =>
        el?.style.setProperty("--a", "1")
      );
    };

    if (reduce) {
      finish();
      return;
    }

    const update = () => {
      raf = 0;

      const vh = window.innerHeight;

      /* Whole About section progress */
      const rr = root.getBoundingClientRect();

      root.style.setProperty(
        "--sp",
        clamp((vh - rr.top) / (rr.height + vh)).toFixed(3)
      );

      /* Intro text reveal */
      const st = statementRef.current;

      if (st) {
        const r = st.getBoundingClientRect();

        st.style.setProperty(
          "--p",
          clamp(
            (vh * 0.85 - r.top) / (vh * 0.3 + r.height)
          ).toFixed(3)
        );
      }

      /* Portrait reveal — retained for the offset frame */
      const ph = photoRef.current;

      if (ph) {
        const r = ph.getBoundingClientRect();

        root.style.setProperty(
          "--pe",
          clamp((vh * 0.95 - r.top) / (vh * 0.5)).toFixed(3)
        );
      }

      /* Skill-list progress drives the gold border */
      const list = listRef.current;

      if (list) {
        const r = list.getBoundingClientRect();

        const contentProgress = clamp(
          (vh * 0.5 - r.top) / r.height
        );

        root.style.setProperty(
          "--cp",
          contentProgress.toFixed(3)
        );

        /* SVG pathLength is 100, so the offset runs from 100 to 0 */
        root.style.setProperty(
          "--ring-offset",
          (100 * (1 - contentProgress)).toFixed(3)
        );
      }

      /* Determine the skill chapter nearest the viewport center */
      let best = -1;
      let bestA = 0.05;

      chapterRefs.current.forEach((el, i) => {
        if (!el) return;

        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;

        const a = clamp(
          1 - Math.abs(center - vh * 0.5) / (vh * 0.42)
        );

        el.style.setProperty("--a", a.toFixed(3));

        if (a > bestA) {
          bestA = a;
          best = i;
        }
      });

      if (best >= 0) {
        setActive((prev) => (prev === best ? prev : best));
      }
    };

    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
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

  const ActiveIcon = SKILLS[active].Icon;

  return (
    <section
      id="about"
      ref={rootRef}
      className="relative overflow-x-clip px-6 py-24 md:px-12 lg:px-20 lg:py-32"
    >
      <style>{`
        .ab-chip {
          animation: ab-chip .45s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes ab-chip {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ab-chip {
            animation: none;
          }
        }
      `}</style>

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 aspect-square w-160 max-w-[90vw] rounded-full"
        style={{
          background: `radial-gradient(closest-side, color-mix(in srgb, ${GOLD} 13%, transparent), transparent)`,
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-12 lg:gap-14">
        {/* ================= PHOTO ================= */}
        <div className="flex justify-center lg:sticky lg:top-24 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:h-[calc(100svh-7rem)] lg:items-center lg:self-start">
          <div
            ref={photoRef}
            className="relative w-[min(72vw,20rem)] sm:w-80 lg:w-88"
          >
            {/* Soft gold glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[70px]"
            />

            {/* Rotating outer ring */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[calc(100%+2rem)] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border border-[#D4AF37]/20 sm:w-[calc(100%+4rem)]"
            >
              <div className="absolute left-1/2 -top-1.25 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
            </div>

            {/* Offset gold frame */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border"
              style={{
                borderColor: `color-mix(in srgb, ${GOLD} 45%, transparent)`,
                opacity: "var(--pe, 0)",
              }}
            />

            {/* Circular portrait and scroll-linked progress border */}
            <div className="relative aspect-square">
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -inset-0.75 z-20 h-[calc(100%+6px)] w-[calc(100%+6px)]"
                viewBox="0 0 100 100"
                fill="none"
              >
                {/* Subtle gold track */}
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke={GOLD}
                  strokeOpacity="0.15"
                  strokeWidth="0.8"
                />

                {/* Progress follows the left-side skill chapters */}
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke={GOLD}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset="var(--ring-offset, 100)"
                  transform="rotate(-90 50 50)"
                  style={{
                    filter:
                      "drop-shadow(0 0 3px rgba(212,175,55,0.35))",
                    transition: "stroke-dashoffset 80ms linear",
                  }}
                />
              </svg>

              {/* Portrait image */}
              <div className="absolute inset-0 overflow-hidden rounded-full border border-[#D4AF37]/15 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                <div
                  className="absolute inset-0"
                  style={{
                    transform:
                      "translateY(calc((var(--sp, 0.5) - .5) * -24px)) scale(1.08)",
                  }}
                >
                  <Image
                    src="/images/Frame 4.png"
                    alt="Khaled Ammar"
                    fill
                    priority
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 72vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0B0B0F]/70 via-transparent to-transparent" />
              </div>
            </div>

            

            {/* Active skill label */}
            <div className="absolute -bottom-5 left-1/2 z-30 -translate-x-1/2">
              <div
                key={active}
                className="ab-chip flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium text-(--foreground) backdrop-blur-xl"
                style={{
                  borderColor: HAIR,
                  background:
                    "color-mix(in srgb, var(--background, #0B0B0F) 88%, transparent)",
                }}
              >
                <ActiveIcon size={16} style={{ color: GOLD }} />
                {SKILLS[active].title}
              </div>
            </div>
          </div>
        </div>

        {/* ================= TEXT + SKILLS ================= */}
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          {/* Scroll-animated statement */}
          <p
            ref={statementRef}
            className="font-bold leading-[1.12] tracking-tight text-(--foreground)"
            style={
              {
                fontSize: "clamp(2rem, 3vw + 1rem, 3.75rem)",
                "--n": WORDS.length,
              } as React.CSSProperties
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
                  } as React.CSSProperties
                }
              >
                {w}
              </span>
            ))}
          </p>

          {/* Description */}
          <p
            className="mt-10 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
            style={{ color: MUTED }}
          >
            I&apos;m passionate about digital experiences that are intuitive,
            visually engaging, and purposeful. I enjoy turning ideas into
            simple interfaces and bringing those designs to life with modern
            frontend technologies.
          </p>

          {/* Scroll-driven skill chapters */}
          <ul ref={listRef} className="mt-16 lg:mt-24">
            {SKILLS.map(({ title, text, Icon }, i) => (
              <li
                key={title}
                ref={(el) => {
                  chapterRefs.current[i] = el;
                }}
                className="flex min-h-[34svh] items-center border-t py-10 lg:min-h-[42svh]"
                style={{
                  borderColor: HAIR,
                  opacity: "calc(.22 + var(--a, 0) * .78)",
                  transform:
                    "translateX(calc((1 - var(--a, 0)) * 28px))",
                }}
              >
                <div className="flex items-start gap-5 sm:gap-7">
                  <span
                    className="grid size-12 shrink-0 place-items-center rounded-full border transition-colors duration-300"
                    style={{
                      borderColor: `color-mix(in srgb, ${GOLD} 50%, transparent)`,
                      color: active === i ? "#0B0B0F" : GOLD_INK,
                      background: active === i ? GOLD : "transparent",
                    }}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </span>

                  <div>
                    <h3
                      className="font-bold leading-tight tracking-tight text-(--foreground)"
                      style={{
                        fontSize: "clamp(1.75rem, 2.4vw + 1rem, 3rem)",
                      }}
                    >
                      {title}
                    </h3>

                    <p
                      className="mt-3 max-w-md text-base leading-7"
                      style={{ color: MUTED }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-12 w-full max-w-sm sm:w-auto sm:max-w-none">
            <Button
              text="More About Me"
              variant="gold"
              iconPosition="right"
              normalIcon="/icons/right.svg"
              pressedIcon="/icons/right.svg"
              fullWidth
              href="/about"
            />
          </div>
        </div>
      </div>
    </section>
  );
}