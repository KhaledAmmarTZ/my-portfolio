
"use client";

import Link from "next/link";
import styles from "./ProjectComing.module.css";

const blocks = [
  { x: 470, y: 250, w: 520, h: 40 },
  { x: 470, y: 320, w: 300, h: 150 },
  { x: 800, y: 320, w: 190, h: 70 },
  { x: 800, y: 400, w: 190, h: 70 },
  { x: 470, y: 500, w: 160, h: 90 },
  { x: 650, y: 500, w: 160, h: 90 },
];

export default function ProjectComing() {
  return (
    <main
      className={`${styles.page} relative flex min-h-screen flex-col overflow-hidden bg-[#8B84FF] text-[#14122B]`}
    >
      <div className={styles.scaledDesign}>
        {/* Blueprint grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,18,43,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(20,18,43,.13) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className={styles.artFrame}>
          {/* Construction illustration — right side */}
          <svg
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMaxYMid meet"
            className={`${styles.art} pointer-events-none absolute right-0 top-0 h-full`}
            aria-hidden="true"
          >
            {/* Browser wireframe */}
            <rect
              x="440"
              y="190"
              width="580"
              height="430"
              rx="16"
              fill="#F3EEE3"
              stroke="#14122B"
              strokeWidth="4"
            />

            <path
              d="M440 236 H1020"
              stroke="#14122B"
              strokeWidth="4"
            />

            {[468, 490, 512].map((cx) => (
              <circle
                key={cx}
                cx={cx}
                cy="213"
                r="6"
                fill="#14122B"
              />
            ))}

            <rect
              x="540"
              y="204"
              width="200"
              height="18"
              rx="9"
              fill="#14122B"
              opacity=".12"
            />

            {/* Animated interface blocks */}
            {blocks.map((block, index) => (
              <rect
                key={index}
                x={block.x}
                y={block.y}
                width={block.w}
                height={block.h}
                rx="8"
                pathLength={1}
                fill="none"
                stroke="#14122B"
                strokeWidth="3"
                className={styles.draw}
                style={{ animationDelay: `${index * 0.35}s` }}
              />
            ))}

            <path
              d="M490 345 l60 80 l40 -50 l60 70"
              stroke="#14122B"
              strokeWidth="3"
              fill="none"
              pathLength={1}
              className={styles.draw}
              style={{ animationDelay: "0.6s" }}
            />

            {/* Moving pencil */}
            <g className={styles.trace}>
              <g transform="translate(830 500) rotate(35)">
                <rect
                  x="-9"
                  y="-90"
                  width="18"
                  height="70"
                  fill="#FF6B4A"
                  stroke="#14122B"
                  strokeWidth="3"
                />

                <rect
                  x="-9"
                  y="-104"
                  width="18"
                  height="14"
                  fill="#F3EEE3"
                  stroke="#14122B"
                  strokeWidth="3"
                />

                <path
                  d="M-9 -20 L0 4 L9 -20Z"
                  fill="#FFD2C4"
                  stroke="#14122B"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>

        {/* Main content — left side */}
        <section className="relative z-10 flex flex-1 items-center px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
          <div
            className={`${styles.rise} relative w-full max-w-md rounded-2xl bg-[#8B84FF]/90 p-3 backdrop-blur-sm sm:rounded-3xl sm:p-4 lg:max-w-lg lg:bg-transparent lg:p-0 lg:backdrop-blur-none`}
          >
            <p className="inline-block -rotate-2 rounded-full border-2 border-[#14122B] bg-[#C8F560] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest sm:text-[11px]">
              Under construction
            </p>

            <h1 className="mt-5 text-[clamp(2.65rem,6vw,5.8rem)] font-extrabold leading-[0.92] tracking-[-0.045em] sm:mt-6 sm:text-[clamp(3.2rem,5.5vw,5.8rem)]">
              Still on the
              <br />
              drawing board
              <span className={styles.caret}>_</span>
            </h1>

            <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-[#14122B]/80 sm:mt-6 sm:text-base">
              This page is being sketched, measured and pieced together. The
              blueprint is ready, the bricks are on the way.
            </p>

            {/* Button */}
            <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#14122B] px-5 py-3 font-display text-sm font-extrabold text-[#C8F560] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_#14122B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14122B] sm:w-auto sm:px-6 sm:py-3.5"
              >
                Back to home
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}