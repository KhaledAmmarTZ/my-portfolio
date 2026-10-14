"use client";

import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type Skill = {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
};

export type SkillsProps = {
  /** "system" follows the OS, or an ancestor with class="dark". */
  theme?: "system" | "light" | "dark";
  className?: string;
};

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

const icons: Record<string, ReactNode> = {
  figma: (
    <svg viewBox="0 0 38 57" aria-hidden="true">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  ),

  motion: (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="none"
      stroke="#4C8DFF"
      strokeWidth="2.6"
    >
      <rect x="2.5" y="2.5" width="27" height="27" rx="5" />
      <rect x="9" y="11" width="5" height="10" rx="2" />
      <rect x="16.5" y="8" width="7" height="16" rx="2.5" />
    </svg>
  ),

  davinci: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <ellipse cx="16" cy="9" rx="5.2" ry="7.6" fill="#FD3144" />
      <ellipse
        cx="16"
        cy="9"
        rx="5.2"
        ry="7.6"
        fill="#F2C94C"
        transform="rotate(120 16 17)"
      />
      <ellipse
        cx="16"
        cy="9"
        rx="5.2"
        ry="7.6"
        fill="#389CDA"
        transform="rotate(240 16 17)"
      />
    </svg>
  ),

  html: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#E34F26" d="M4 2h24l-2.2 25L16 30 6.2 27z" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#fff"
        fontFamily="Inter, system-ui, sans-serif"
      >
        5
      </text>
    </svg>
  ),

  css: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#7A44B8" d="M4 2h24l-2.2 25L16 30 6.2 27z" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#fff"
        fontFamily="Inter, system-ui, sans-serif"
      >
        3
      </text>
    </svg>
  ),

  node: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="#5FA04E" d="M16 1.5 29 9v14l-13 7.5L3 23V9z" />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="#fff"
        fontFamily="Inter, system-ui, sans-serif"
      >
        JS
      </text>
    </svg>
  ),

  laravel: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="#FF2D20" />
      <path
        d="M11.5 8.5v14h9"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  next: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="currentColor" />
      <path
        d="M12.5 10.5v11M12.5 10.5l8.5 11M20.5 10.5v6"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ stroke: "var(--sk-bg)" }}
      />
    </svg>
  ),

  framer: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M5 1h14v7h-7zM5 8h7l7 7H5zM5 15h7v7z" />
    </svg>
  ),

  github: (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  ),

  git: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <g transform="rotate(45 16 16)">
        <rect x="5" y="5" width="22" height="22" rx="3.5" fill="#F34F29" />
      </g>
      <path
        d="M13 9.5v12M13 13.5l6 3.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      />
      <g fill="#fff">
        <circle cx="13" cy="9.5" r="2.2" />
        <circle cx="13" cy="21.5" r="2.2" />
        <circle cx="19" cy="17" r="2.2" />
      </g>
    </svg>
  ),

  vscode: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="#007ACC"
        d="M22.5 2 12 11.6 6.4 7.4 3.5 8.8v14.4l2.9 1.4 5.6-4.2L22.5 30 28.5 27V5z"
      />
      <path fill="#fff" fillOpacity=".9" d="M22.5 9.5v13L15 16z" />
    </svg>
  ),

  php: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <ellipse cx="16" cy="16" rx="15" ry="9" fill="#777BB4" />
      <text
        x="16"
        y="19.6"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="700"
        fill="#fff"
        fontFamily="Inter, system-ui, sans-serif"
      >
        php
      </text>
    </svg>
  ),

  make: (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="#7C3AED"
        d="M16 2l3.4 9.6L29 15l-9.6 3.4L16 28l-3.4-9.6L3 15l9.6-3.4z"
      />
      <circle cx="26" cy="5.5" r="2.5" fill="#7C3AED" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/* Skills                                                                      */
/* -------------------------------------------------------------------------- */

const SKILLS: Skill[] = [
  {
    id: "figma",
    name: "Figma",
    description: "UI/UX design, prototyping, and collaboration.",
    icon: icons.figma,
  },
  {
    id: "figma-motion",
    name: "Figma Motion",
    description: "Animation and motion design for interactive UI flows.",
    icon: icons.motion,
  },
  {
    id: "davinci",
    name: "DaVinci Resolve",
    description: "Video editing, color grading, and motion graphics.",
    icon: icons.davinci,
  },
  {
    id: "html",
    name: "HTML",
    description: "Semantic structure, accessibility, and web foundations.",
    icon: icons.html,
  },
  {
    id: "css",
    name: "CSS",
    description: "Layout, typography, and responsive visual styling.",
    icon: icons.css,
  },
  {
    id: "node",
    name: "Node.js",
    description: "Server-side runtime for scalable backend applications.",
    icon: icons.node,
  },
  {
    id: "laravel",
    name: "Laravel",
    description: "PHP framework for robust, maintainable backend systems.",
    icon: icons.laravel,
  },
  {
    id: "next",
    name: "Next.js",
    description: "React-based framework for fast, SEO-friendly web apps.",
    icon: icons.next,
  },
  {
    id: "framer",
    name: "Framer",
    description: "Interactive design, prototyping, and motion.",
    icon: icons.framer,
  },
  {
    id: "github",
    name: "GitHub",
    description: "Version control, collaboration, and code hosting.",
    icon: icons.github,
  },
  {
    id: "git",
    name: "Git",
    description: "Distributed version control and source management.",
    icon: icons.git,
  },
  {
    id: "vscode",
    name: "VS Code",
    description: "Code editor for development, debugging, and extensions.",
    icon: icons.vscode,
  },
  {
    id: "php",
    name: "PHP",
    description: "Server-side scripting for dynamic web applications.",
    icon: icons.php,
  },
  {
    id: "figma-make",
    name: "Figma Make",
    description: "Prompt-driven design and interactive prototypes.",
    icon: icons.make,
  },
];

/* Original row order: 4 / 3 / 4 / 3 cards. */
const ROWS: string[][] = [
  ["figma", "figma-motion", "davinci", "html"],
  ["css", "node", "laravel"],
  ["next", "framer", "github", "git"],
  ["vscode", "php", "figma-make"],
];

const byId = Object.fromEntries(SKILLS.map((skill) => [skill.id, skill]));

/* -------------------------------------------------------------------------- */
/* Styles                                                                      */
/* -------------------------------------------------------------------------- */

const DARK_TOKENS = `
  --sk-bg: #0B0B0F;
  --sk-card: #1d222a;
  --sk-card-hover: #252c36;
  --sk-ink: #f0f2f5;
  --sk-muted: #a9b1bd;
  --sk-line: #3a424e;
  --sk-accent: #D4AF37;
`;

const CSS = `
.sk {
  --sk-bg: #FBF8F2;
  --sk-card: #e9e7e2;
  --sk-card-hover: #dfdcd5;
  --sk-ink: #000000;
  --sk-muted: #55514a;
  --sk-line: #a9a9a9;
  --sk-accent: #D4AF37;

  box-sizing: border-box;
  width: 100%;
  padding: clamp(48px, 7vw, 96px) clamp(16px, 6vw, 80px);
  background: var(--sk-bg);
  color: var(--sk-ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
}

.sk *,
.sk *::before,
.sk *::after {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  .sk[data-theme="system"] {
    ${DARK_TOKENS}
  }
}

.dark .sk[data-theme="system"],
.sk[data-theme="dark"] {
  ${DARK_TOKENS}
}

/* Section header */
.sk-header {
  max-width: 700px;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
}

.sk-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  color: var(--sk-accent);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.sk-eyebrow::before {
  content: "";
  width: 24px;
  height: 1px;
  background: currentColor;
}

.sk-heading {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -.055em;
  font-weight: 650;
}

.sk-heading span {
  color: var(--sk-accent);
}

.sk-intro {
  max-width: 620px;
  margin: 20px 0 0;
  color: var(--sk-muted);
  font-size: 16px;
  line-height: 1.8;
}

/* Toolkit label */
.sk-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: none;
  margin: 32px 0 16px;
  box-sizing: border-box;
}

.sk-meta-label {
  color: var(--sk-muted);
  font-size: 12px;
  font-weight: 650;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.sk-count {
  color: var(--sk-muted);
  font-size: 13px;
}

/* Grid */

/* Spacing between skill cards */
.sk-grid {
  width: 100%;
  max-width: none;
  box-sizing: border-box;
}

.sk-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin-bottom: 2px;
}

.sk-row:last-child {
  margin-bottom: 0;
}

.sk-card {
  position: relative;
  flex: 1 1 0;
  min-width: 200px;
  min-height: 186px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  text-align: left;
  font: inherit;
  color: inherit;
  background: var(--sk-card);
  border: 0;
  border-radius: 6px;
  outline: 1px solid var(--sk-line);
  outline-offset: -1px;
  transition: background-color .18s, outline-color .18s;
}

.sk-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  color: var(--sk-ink);
  transition: transform .2s ease;
}

.sk-icon svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.sk-text {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
}

.sk-name,
.sk-desc {
  display: block;
  font-size: 15px;
  line-height: 1.5;
}

.sk-name {
  color: var(--sk-ink);
  font-weight: 650;
}

.sk-desc {
  color: var(--sk-muted);
  font-weight: 400;
}

/* Visual-only hover effect */
.sk-card:hover {
  background: var(--sk-card-hover);
  outline: 2px solid #D4AF37;
  outline-offset: -2px;
}

.sk-card:hover .sk-icon {
  transform: scale(1.08) rotate(-3deg);
}
/* Responsive */
@media (max-width: 640px) {
  .sk {
    padding: 52px 16px;
  }

  .sk-header {
    margin-bottom: 30px;
  }

  .sk-card {
    min-width: min(100%, 155px);
    min-height: 166px;
    padding: 18px 16px;
    gap: 13px;
  }

  .sk-icon {
    width: 42px;
    height: 42px;
  }

  .sk-name,
  .sk-desc {
    font-size: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sk *,
  .sk *::before,
  .sk *::after {
    transition: none !important;
  }
}
`;

/* -------------------------------------------------------------------------- */
/* Component                                                                   */
/* -------------------------------------------------------------------------- */

export default function Skills({
  theme = "system",
  className = "",
}: SkillsProps) {
  return (
    <section
      className={`sk ${className}`.trim()}
      data-theme={theme}
      aria-label="Skills and tools"
    >
      <style>{CSS}</style>

      {/* Section introduction */}
      <header className="sk-header">
        <div className="sk-eyebrow">Skills &amp; Technologies</div>

        <h2 className="sk-heading">
          The tools behind
          <br />
          <span>the experience.</span>
        </h2>

        <p className="sk-intro">
          From crafting intuitive interfaces to building responsive web
          experiences, I combine design thinking with modern development tools
          to turn ideas into meaningful digital products.
        </p>
      </header>

      {/* Toolkit label */}
      <div className="sk-meta">
        <span className="sk-meta-label">My toolkit</span>
        <span className="sk-count">{SKILLS.length} tools</span>
      </div>

      {/* Display-only skills grid */}
      <div className="sk-grid">
        {ROWS.map((row, index) => (
          <div className="sk-row" key={index}>
            {row.map((id) => {
              const skill = byId[id];

              if (!skill) return null;

              return (
                <div className="sk-card" key={skill.id}>
                  <span className="sk-icon">{skill.icon}</span>

                  <span className="sk-text">
                    <span className="sk-name">{skill.name}</span>
                    <span className="sk-desc">{skill.description}</span>
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}