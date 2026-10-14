"use client";

import Button from "@/components/ui/Button";
import RightSidebar from "@/components/RightSidebar";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   Tweakables
------------------------------------------------------------------- */
const GOLD = "#D4AF37";
const MUTED = "color-mix(in srgb, var(--foreground) 68%, transparent)";
const GOLD_INK = "color-mix(in srgb, #D4AF37 62%, var(--foreground))";

// Wait for the navbar logo intro (first visit only) before placing letters.
// Navbar intro = 1400ms hold + 1500ms glide. Set to 0 if you remove the intro.
const INTRO_WAIT_MS = 2700;
const LETTER_STAGGER_MS = 110;

const WORDS = ["PORT", "FOLIO"];

// Where each of the 9 letters starts before it is "placed"
const FROM = [
  { dx: "-1.1em", dy: "-2.6em", r: "-38deg" },
  { dx: "0.9em", dy: "-3.2em", r: "26deg" },
  { dx: "-0.5em", dy: "-2.2em", r: "-22deg" },
  { dx: "1.2em", dy: "-2.9em", r: "42deg" },
  { dx: "-1.3em", dy: "-3.4em", r: "-30deg" },
  { dx: "0.6em", dy: "-2.4em", r: "18deg" },
  { dx: "-0.9em", dy: "-3.0em", r: "-44deg" },
  { dx: "1.1em", dy: "-2.7em", r: "24deg" },
  { dx: "-0.4em", dy: "-3.3em", r: "-16deg" },
];

/* ------------------------------------------------------------------
   The giant word. Rendered twice: outline layer + gold spotlight layer
------------------------------------------------------------------- */
function Letters() {
  let n = 0;
  return (
    <span className="flex flex-row flex-nowrap items-center justify-center">
      {WORDS.map((word) => (
        <span key={word} className="flex">
          {word.split("").map((ch) => {
            const i = n++;
            const f = FROM[i];
            return (
              <span
                key={i}
                className="hx-letter"
                style={
                  {
                    "--i": i,
                    "--dx": f.dx,
                    "--dy": f.dy,
                    "--r": f.r,
                  } as React.CSSProperties
                }
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------
   PROJECT MOCKUPS
   Everything inside a card is sized in cqw (1% of the card's width),
   so each mockup scales perfectly at any card size.
------------------------------------------------------------------- */
const q = (n: number) => `${n}cqw`;
const FG = "var(--foreground)";
const MUTE = "color-mix(in srgb, var(--foreground) 55%, transparent)";
const HAIR = "color-mix(in srgb, var(--foreground) 12%, transparent)";
const PANEL = "color-mix(in srgb, var(--foreground) 7%, transparent)";
const PAPER = "var(--background, #fff)";
const GREEN = "#3FA77A";
const gold = (p: number) => `color-mix(in srgb, ${GOLD} ${p}%, transparent)`;

const goldBtn: React.CSSProperties = {
  background: GOLD,
  color: "#0B0B0F",
  fontWeight: 700,
  borderRadius: q(2),
  padding: `${q(1.3)} ${q(2.8)}`,
  fontSize: q(2.2),
  whiteSpace: "nowrap",
};
const ghostBtn: React.CSSProperties = {
  border: `1px solid ${HAIR}`,
  fontWeight: 600,
  borderRadius: q(2),
  padding: `${q(1.3)} ${q(2.8)}`,
  fontSize: q(2.2),
  whiteSpace: "nowrap",
};

/* 1. Landing page in a browser window */
function MockLanding() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: q(1.5),
          padding: `${q(1.8)} ${q(3)}`,
          borderBottom: `1px solid ${HAIR}`,
        }}
      >
        {[0, 1, 2].map((k) => (
          <i
            key={k}
            style={{
              width: q(1.8),
              height: q(1.8),
              borderRadius: "50%",
              background: "color-mix(in srgb, var(--foreground) 24%, transparent)",
            }}
          />
        ))}
        <span
          style={{
            flex: 1,
            marginLeft: q(2),
            padding: `${q(.8)} ${q(2)}`,
            borderRadius: q(2),
            background: PANEL,
            fontSize: q(2.1),
            color: MUTE,
            textAlign: "center",
          }}
        >
          lumen.app
        </span>
      </div>

      <div style={{ flex: 1, padding: `${q(3)} ${q(4)}`, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: q(2.1) }}>
          <b style={{ fontSize: q(3), display: "flex", alignItems: "center", gap: q(1) }}>
            <i style={{ width: q(2.4), height: q(2.4), borderRadius: "50%", background: GOLD }} />
            Lumen
          </b>
          <span style={{ color: MUTE, display: "flex", gap: q(3) }}>
            <span>Product</span>
            <span>Pricing</span>
            <span>Docs</span>
          </span>
          <span style={{ background: FG, color: PAPER, borderRadius: q(2), padding: `${q(1)} ${q(2.2)}`, fontWeight: 600 }}>
            Sign up
          </span>
        </div>

        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: q(3), alignItems: "center" }}>
          <div>
            <div style={{ fontSize: q(5.8), fontWeight: 800, lineHeight: 1.06, letterSpacing: "-.03em" }}>
              Sleep better,
              <br />
              every night.
            </div>
            <p style={{ marginTop: q(2), fontSize: q(2.3), lineHeight: 1.45, color: MUTE }}>
              Smart lighting that follows your body clock.
            </p>
            <div style={{ marginTop: q(3), display: "flex", gap: q(1.5) }}>
              <span style={goldBtn}>Get started</span>
              <span style={ghostBtn}>Watch demo</span>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              alignSelf: "stretch",
              margin: `${q(1.5)} 0`,
              borderRadius: q(3),
              overflow: "hidden",
              background: `linear-gradient(155deg, ${gold(60)}, color-mix(in srgb, #8A6D12 35%, transparent))`,
            }}
          >
            <i
              style={{
                position: "absolute",
                left: "50%",
                top: "14%",
                width: "62%",
                aspectRatio: "1",
                transform: "translateX(-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #FFF6CF 0%, rgba(255,246,207,.35) 45%, transparent 70%)",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: q(2),
                bottom: q(2),
                background: PAPER,
                borderRadius: q(1.6),
                padding: `${q(1)} ${q(1.7)}`,
                fontSize: q(1.8),
                fontWeight: 600,
              }}
            >
              Warm · 2700K
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2. Fitness app in a phone frame */
function MockApp() {
  const C = 2 * Math.PI * 18;
  const rows = [
    ["Morning run", "3.2 km · 24 min"],
    ["Cycling", "8.5 km · 31 min"],
  ];
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        background: `linear-gradient(165deg, ${gold(16)}, transparent 65%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: q(5),
          width: q(36),
          height: q(76),
          transform: "translateX(-50%)",
          borderRadius: q(6.5),
          border: `${q(0.9)} solid color-mix(in srgb, var(--foreground) 80%, transparent)`,
          background: PAPER,
          padding: `${q(2.8)} ${q(3)}`,
          boxShadow: "0 10px 24px -12px rgba(0,0,0,.4)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: q(1.7), fontWeight: 700 }}>
          <span>9:41</span>
          <span style={{ color: MUTE }}>5G</span>
        </div>

        <p style={{ marginTop: q(2.2), fontSize: q(1.9), color: MUTE }}>Good morning, Sam</p>
        <p style={{ fontSize: q(4.2), fontWeight: 800, letterSpacing: "-.02em" }}>Today</p>

        <div
          style={{
            marginTop: q(2),
            display: "flex",
            alignItems: "center",
            gap: q(2.2),
            background: PANEL,
            borderRadius: q(3),
            padding: q(2.2),
          }}
        >
          <svg viewBox="0 0 44 44" style={{ width: q(11), height: q(11), flex: "none" }}>
            <circle cx="22" cy="22" r="18" fill="none" strokeWidth="5" style={{ stroke: HAIR }} />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              strokeWidth="5"
              strokeLinecap="round"
              stroke={GOLD}
              strokeDasharray={`${C * 0.72} ${C}`}
              transform="rotate(-90 22 22)"
            />
          </svg>
          <div>
            <p style={{ fontSize: q(4), fontWeight: 800, lineHeight: 1 }}>7,240</p>
            <p style={{ marginTop: q(0.6), fontSize: q(1.6), color: MUTE }}>of 10,000 steps</p>
          </div>
        </div>

        {rows.map(([t, s]) => (
          <div key={t} style={{ marginTop: q(2), display: "flex", alignItems: "center", gap: q(2) }}>
            <i style={{ width: q(5), height: q(5), borderRadius: q(1.5), background: gold(28), flex: "none" }} />
            <div>
              <p style={{ fontSize: q(2), fontWeight: 700 }}>{t}</p>
              <p style={{ fontSize: q(1.6), color: MUTE }}>{s}</p>
            </div>
          </div>
        ))}
      </div>

      <span
        style={{
          position: "absolute",
          left: q(4),
          top: q(26),
          background: PAPER,
          borderRadius: q(3),
          padding: `${q(1.2)} ${q(2.2)}`,
          fontSize: q(1.9),
          fontWeight: 700,
          boxShadow: "0 6px 16px -8px rgba(0,0,0,.35)",
          display: "flex",
          alignItems: "center",
          gap: q(1.2),
        }}
      >
        <i style={{ width: q(1.8), height: q(1.8), borderRadius: "50%", background: GOLD }} />
        12-day streak
      </span>
      <span
        style={{
          position: "absolute",
          right: q(4),
          top: q(46),
          background: PAPER,
          color: GREEN,
          borderRadius: q(3),
          padding: `${q(1.2)} ${q(2.2)}`,
          fontSize: q(1.9),
          fontWeight: 700,
          boxShadow: "0 6px 16px -8px rgba(0,0,0,.35)",
        }}
      >
        +18% this week
      </span>
    </div>
  );
}

/* 3. Analytics dashboard */
function MockDash() {
  const kpis = [
    ["Revenue", "$48.2k", "+12.4%"],
    ["Users", "12.4k", "+8.1%"],
    ["Churn", "1.9%", "-0.4%"],
  ];
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <div
        style={{
          width: q(11),
          borderRight: `1px solid ${HAIR}`,
          padding: `${q(3)} 0`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: q(3),
        }}
      >
        <i style={{ width: q(4.4), height: q(4.4), borderRadius: q(1.2), background: GOLD }} />
        {[0, 1, 2, 3].map((k) => (
          <i
            key={k}
            style={{
              width: q(3.6),
              height: q(3.6),
              borderRadius: q(1),
              background: k === 0 ? gold(35) : PANEL,
            }}
          />
        ))}
      </div>

      <div style={{ flex: 1, minWidth: 0, padding: q(3.2), display: "flex", flexDirection: "column", gap: q(2.4) }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <b style={{ fontSize: q(3.4), letterSpacing: "-.01em" }}>Overview</b>
          <span style={{ ...ghostBtn, padding: `${q(.8)} ${q(1.8)}`, fontSize: q(1.8), color: MUTE }}>
            Last 30 days
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: q(1.8) }}>
          {kpis.map(([l, v, d]) => (
            <div key={l} style={{ background: PANEL, borderRadius: q(1.8), padding: q(1.9) }}>
              <p style={{ fontSize: q(1.7), color: MUTE }}>{l}</p>
              <p style={{ fontSize: q(3.8), fontWeight: 800, lineHeight: 1.2, letterSpacing: "-.02em" }}>{v}</p>
              <p style={{ fontSize: q(1.7), fontWeight: 700, color: GREEN }}>{d}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            border: `1px solid ${HAIR}`,
            borderRadius: q(2),
            padding: q(2.2),
            display: "flex",
            flexDirection: "column",
            gap: q(1.2),
          }}
        >
          <p style={{ fontSize: q(1.8), color: MUTE }}>Revenue · daily</p>
          <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ flex: 1, minHeight: 0, width: "100%" }}>
            <path
              d="M0 24 C10 22 14 25 22 20 S36 12 44 15 S60 22 68 13 S86 8 100 10"
              fill="none"
              strokeWidth="1"
              strokeDasharray="2 2"
              vectorEffect="non-scaling-stroke"
              style={{ stroke: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
            />
            <path
              d="M0 22 C8 20 12 24 20 18 S34 8 42 13 S58 20 66 10 S84 4 100 7 L100 30 L0 30 Z"
              style={{ fill: gold(18) }}
            />
            <path
              d="M0 22 C8 20 12 24 20 18 S34 8 42 13 S58 20 66 10 S84 4 100 7"
              fill="none"
              stroke={GOLD}
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* 4. Online store product page */
function MockShop() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `${q(2.2)} ${q(4)}`,
          borderBottom: `1px solid ${HAIR}`,
          fontSize: q(2),
        }}
      >
        <b style={{ fontSize: q(2.8), letterSpacing: ".04em" }}>Aero</b>
        <span style={{ color: MUTE, display: "flex", gap: q(3) }}>
          <span>Chairs</span>
          <span>Lamps</span>
          <span>Desks</span>
        </span>
        <span style={{ fontWeight: 600 }}>Cart (2)</span>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: q(4), padding: q(4) }}>
        <div style={{ background: PANEL, borderRadius: q(3), display: "grid", placeItems: "center" }}>
          <svg viewBox="0 0 100 100" style={{ width: "78%" }}>
            <ellipse cx="50" cy="91" rx="30" ry="3" fill="rgba(0,0,0,.14)" />
            <path d="M33 66L27 90M67 66L73 90" stroke={FG} strokeWidth="3.5" strokeLinecap="round" />
            <rect x="30" y="12" width="40" height="44" rx="15" fill={GOLD} />
            <rect x="21" y="52" width="58" height="15" rx="7.5" fill="#B8922A" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: q(1.5), minWidth: 0 }}>
          <p style={{ fontSize: q(1.8), color: MUTE }}>Chairs / Lounge</p>
          <p style={{ fontSize: q(4.2), fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.02em" }}>
            Aero Lounge Chair
          </p>
          <p style={{ fontSize: q(2), color: MUTE }}>
            <span style={{ color: GOLD, letterSpacing: ".1em" }}>★★★★★</span> 4.8 (212)
          </p>
          <p style={{ display: "flex", alignItems: "baseline", gap: q(1.5) }}>
            <b style={{ fontSize: q(5), letterSpacing: "-.02em" }}>$249</b>
            <span style={{ fontSize: q(2.2), color: MUTE, textDecoration: "line-through" }}>$329</span>
          </p>
          <div style={{ display: "flex", gap: q(1.4) }}>
            {[GOLD, "#14120C", "#CFC8B6"].map((c, k) => (
              <i
                key={c}
                style={{
                  width: q(3.4),
                  height: q(3.4),
                  borderRadius: "50%",
                  background: c,
                  outline: k === 0 ? `${q(.4)} solid ${FG}` : `1px solid ${HAIR}`,
                  outlineOffset: q(.4),
                }}
              />
            ))}
          </div>
          <span style={{ ...goldBtn, textAlign: "center", padding: `${q(1.7)} ${q(2)}`, fontSize: q(2.4) }}>
            Add to cart
          </span>
        </div>
      </div>
    </div>
  );
}

/* 5. Brand identity board */
function MockBrand() {
  const swatches = [
    [GOLD, "#D4AF37"],
    ["#14120C", "#14120C"],
    ["#F3E9C9", "#F3E9C9"],
    ["#8A6D12", "#8A6D12"],
  ];
  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: q(2.5),
        padding: q(3.5),
      }}
    >
      <div
        style={{
          gridRow: "1 / 3",
          background: "#14120C",
          borderRadius: q(3),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: q(2),
        }}
      >
        <svg viewBox="0 0 40 40" style={{ width: q(15) }}>
          <circle cx="20" cy="20" r="18" fill={GOLD} />
          <path d="M20 8C28 13 28 25 20 32C12 25 12 13 20 8Z" fill="#14120C" />
        </svg>
        <p style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: q(6), color: "#F3E9C9", fontWeight: 700 }}>
          Oak &amp; Co.
        </p>
        <p style={{ fontSize: q(1.8), letterSpacing: ".14em", color: "rgba(243,233,201,.6)" }}>
          Furniture studio
        </p>
      </div>

      <div style={{ display: "flex", gap: q(1.6) }}>
        {swatches.map(([c, label]) => (
          <div key={label} style={{ flex: 1, display: "flex", flexDirection: "column", gap: q(1) }}>
            <i
              style={{
                flex: 1,
                borderRadius: q(1.6),
                background: c,
                border: `1px solid ${HAIR}`,
              }}
            />
            <span style={{ fontSize: q(1.4), color: MUTE, textAlign: "center" }}>{label}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          background: PANEL,
          borderRadius: q(3),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: q(3),
        }}
      >
        <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: q(11), fontWeight: 700, lineHeight: 1 }}>
          Aa
        </span>
        <span>
          <p style={{ fontSize: q(2.3), fontWeight: 700 }}>Fraunces</p>
          <p style={{ fontSize: q(1.9), color: MUTE }}>with Inter</p>
        </span>
      </div>
    </div>
  );
}

/* 6. Editorial case study */
function MockCase() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          position: "relative",
          flex: "0 0 54%",
          background: `linear-gradient(135deg, #1B1710 0%, #5A4510 58%, ${GOLD} 135%)`,
        }}
      >
        <span
          style={{
            position: "absolute",
            left: q(4),
            top: q(3.5),
            background: PAPER,
            color: FG,
            borderRadius: q(3),
            padding: `${q(.8)} ${q(2)}`,
            fontSize: q(1.8),
            fontWeight: 700,
          }}
        >
          Case study
        </span>
        <p
          style={{
            position: "absolute",
            left: q(4),
            right: q(4),
            bottom: q(3.5),
            color: "#FFF8E1",
            fontSize: q(5.4),
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-.02em",
          }}
        >
          How we cut checkout time by 38%
        </p>
      </div>

      <div style={{ flex: 1, padding: `${q(3)} ${q(4)}`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: q(2) }}>
          <i style={{ width: q(5.4), height: q(5.4), borderRadius: "50%", background: `linear-gradient(135deg, #F3DC8A, ${GOLD})` }} />
          <div>
            <p style={{ fontSize: q(2.2), fontWeight: 700 }}>Khaled Ammar</p>
            <p style={{ fontSize: q(1.8), color: MUTE }}>Mar 12 · 6 min read</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: q(6) }}>
          {[
            ["38%", "faster checkout"],
            ["+21%", "conversion"],
          ].map(([n, l]) => (
            <div key={n}>
              <p style={{ fontSize: q(5.2), fontWeight: 800, lineHeight: 1, letterSpacing: "-.02em", color: GOLD_INK }}>{n}</p>
              <p style={{ marginTop: q(.6), fontSize: q(1.8), color: MUTE }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 7. Design system sheet */
function MockSystem() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: q(3.5), gap: q(2.6) }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <b style={{ fontSize: q(3.2) }}>Components</b>
        <span style={{ display: "flex", gap: q(2.4), fontSize: q(2), color: MUTE }}>
          <span style={{ color: FG, fontWeight: 700, borderBottom: `${q(.4)} solid ${GOLD}`, paddingBottom: q(.6) }}>
            Buttons
          </span>
          <span>Inputs</span>
          <span>Badges</span>
        </span>
      </div>

      <div style={{ display: "flex", gap: q(1.6) }}>
        <span style={goldBtn}>Primary</span>
        <span style={ghostBtn}>Secondary</span>
        <span style={{ ...ghostBtn, border: "none", color: MUTE }}>Ghost</span>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: q(3) }}>
        <div>
          <p style={{ fontSize: q(1.9), fontWeight: 600, marginBottom: q(1.2) }}>Email</p>
          <div
            style={{
              border: `1px solid ${HAIR}`,
              borderRadius: q(1.8),
              padding: `${q(1.6)} ${q(2)}`,
              fontSize: q(2),
              color: MUTE,
              outline: `${q(.5)} solid ${gold(40)}`,
            }}
          >
            you@studio.com
          </div>
          <p style={{ marginTop: q(1.2), fontSize: q(1.7), color: MUTE }}>We&apos;ll never share it.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: q(2.2) }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: q(2) }}>
            <span style={{ fontWeight: 600 }}>Notifications</span>
            <span style={{ width: q(7), height: q(3.8), borderRadius: q(2), background: GOLD, position: "relative" }}>
              <i style={{ position: "absolute", right: q(.5), top: q(.5), width: q(2.8), height: q(2.8), borderRadius: "50%", background: "#fff" }} />
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: q(1.6), fontSize: q(2), fontWeight: 600 }}>
            <span
              style={{
                width: q(3.4),
                height: q(3.4),
                borderRadius: q(.9),
                background: GOLD,
                color: "#0B0B0F",
                display: "grid",
                placeItems: "center",
                fontSize: q(2.2),
                lineHeight: 1,
              }}
            >
              ✓
            </span>
            Remember me
          </div>
          <div style={{ display: "flex", gap: q(1.4), fontSize: q(1.8), fontWeight: 700 }}>
            <span style={{ background: gold(25), borderRadius: q(2), padding: `${q(.7)} ${q(1.8)}` }}>New</span>
            <span style={{ background: PANEL, borderRadius: q(2), padding: `${q(.7)} ${q(1.8)}`, color: MUTE }}>Beta</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  { name: "Lumen · Landing page", Mock: MockLanding },
  { name: "Stride · Fitness app", Mock: MockApp },
  { name: "Pulse · Analytics dashboard", Mock: MockDash },
  { name: "Aero · Online store", Mock: MockShop },
  { name: "Oak & Co. · Brand identity", Mock: MockBrand },
  { name: "Field Notes · Case study", Mock: MockCase },
  { name: "Atlas · Design system", Mock: MockSystem },
];

/* ------------------------------------------------------------------
   PROJECT CARDS
   They live ONLY inside the area around the word, so they never
   reach the bottom content. Each slot has its own zone, as
   [xMin, xMax, yMin, yMax] in % of that area. The position is
   anchored (translate -x%, -y%) so a card always stays inside it.
------------------------------------------------------------------- */
const ZONES = [
  [22, 14, 0, 3], // top-left
  [78, 90, 0, 3], // top-right
  [3, 16, 94, 100], // bottom-left
  [78, 90, 94, 100], // bottom-right
  [42, 52, 0, 3], // top-center (laptop and up)
  [42, 52, 97, 100], // bottom-center (laptop and up)
] as const;

const DURATIONS = [13, 15, 12, 14, 16, 13]; // seconds per appear/disappear cycle
const DELAYS = [0.4, 3.2, 6, 1.8, 8.5, 4.6]; // stagger so they never pop in together

type Slot = { x: number; y: number; v: number; rot: number };

const rand = (a: number, b: number) => a + Math.random() * (b - a);

const place = (i: number, v: number): Slot => ({
  x: rand(ZONES[i][0], ZONES[i][1]),
  y: rand(ZONES[i][2], ZONES[i][3]),
  v,
  rot: rand(-3, 3),
});

function ProjectCards() {
  const [slots, setSlots] = useState<Slot[]>(() =>
    ZONES.map((z, i) => ({
      x: (z[0] + z[1]) / 2,
      y: (z[2] + z[3]) / 2,
      v: i,
      rot: 0,
    }))
  );

  // Randomize after mount (keeps server and client markup identical)
  useEffect(() => {
    setSlots((prev) => prev.map((s, i) => place(i, s.v)));
  }, []);

  // When a card finishes a cycle, it returns somewhere else as a different project
  const onCycle = (i: number, e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget || e.animationName !== "hx-card") return;
    setSlots((prev) =>
      prev.map((s, k) => {
        if (k !== i) return s;
        const shown = new Set(prev.filter((_, j) => j !== i).map((o) => o.v));
        const all = PROJECTS.map((_, n) => n);
        const free = all.filter((n) => n !== s.v && !shown.has(n));
        const pool = free.length ? free : all.filter((n) => n !== s.v);
        return place(i, pool[Math.floor(Math.random() * pool.length)]);
      })
    );
  };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 inset-y-1 z-0">
      {slots.map((s, i) => {
        const { Mock, name } = PROJECTS[s.v];
        return (
          <div
            key={i}
            className={`absolute ${i >= 4 ? "hidden lg:block" : ""}`}
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              transform: `translate(-${s.x}%, -${s.y}%)`,
            }}
          >
            <div
              onAnimationIteration={(e) => onCycle(i, e)}
              className="hx-slot w-[clamp(120px,30vw,160px)] md:w-[clamp(150px,20vw,210px)] lg:w-[clamp(170px,min(17vw,27vh),280px)]"
              style={
                {
                  "--rot": `${s.rot}deg`,
                  "--d": `${DURATIONS[i]}s`,
                  "--dl": `${DELAYS[i]}s`,
                } as React.CSSProperties
              }
            >
              <div className="hx-surface aspect-4/3 overflow-hidden rounded-xl border">
                <Mock />
              </div>
              <p
                className="mt-1.5 truncate text-[10px] font-medium md:text-xs"
                style={{ color: MUTED }}
              >
                {name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------
   BACKDROP: just a faint dot grid and one soft glow
------------------------------------------------------------------- */
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--foreground) 14%, transparent) 1px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 45%, #000 15%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse at 50% 45%, #000 15%, transparent 75%)",
        }}
      />
      <div
        className="absolute left-1/2 top-[44%] aspect-square w-[70vw] max-w-225 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(closest-side, color-mix(in srgb, ${GOLD} 14%, transparent), transparent)`,
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [showCvModal, setShowCvModal] = useState(false);
  const [go, setGo] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0.5, y: 0.5 }); // 0..1 inside the stage
  const lastMove = useRef(0);
  const visible = useRef(true);

  const handleDownloadCV = () => {
    const link = document.createElement("a");

    link.href = "/cv/Khaled-Ammar-CV.pdf";
    link.download = "Khaled-Ammar-CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowCvModal(false);
  };

  /* ---------- Start placing letters (after navbar intro on 1st visit) ---------- */
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("logo-intro-seen") === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wait = seen || reduce || window.scrollY > 32 ? 150 : INTRO_WAIT_MS;
    const t = setTimeout(() => setGo(true), wait);
    return () => clearTimeout(t);
  }, []);

  /* ---------- Spotlight: follows pointer, drifts on its own when idle ---------- */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pos = { x: 0.5, y: 0.5 };
    let raf = 0;

    const write = () => {
      el.style.setProperty("--mx", `${pos.x * el.clientWidth}px`);
      el.style.setProperty("--my", `${pos.y * el.clientHeight}px`);
    };
    write();
    if (reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => (visible.current = entry.isIntersecting)
    );
    io.observe(el);

    const tick = (t: number) => {
      if (visible.current) {
        if (performance.now() - lastMove.current > 2500) {
          target.current.x = 0.5 + 0.55 * Math.sin(t / 3200);
          target.current.y = 0.5 + 0.3 * Math.sin(t / 2300 + 1);
        }
        pos.x += (target.current.x - pos.x) * 0.07;
        pos.y += (target.current.y - pos.y) * 0.07;
        write();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    target.current = {
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    };
    lastMove.current = performance.now();
  };

  /* Close CV modal with Escape */
  useEffect(() => {
    if (!showCvModal) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setShowCvModal(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showCvModal]);

  return (
    <section
      id="home"
      onPointerMove={onPointerMove}
      className={`relative min-h-svh overflow-hidden ${go ? "hx-go" : ""}`}
    >
      {/* ================= STYLES ================= */}
      <style>{`
        .hx-root{
          --hx-fill:color-mix(in srgb,var(--foreground) 5%,transparent);
          --hx-stroke:color-mix(in srgb,var(--foreground) 38%,transparent);
          --hx-r: clamp(180px, 30vw, 520px);
        }

        .hx-word {
          width: max-content;
          max-width: none;
          font-weight: 900;
          line-height: .82;
          letter-spacing: -.03em;
          white-space: nowrap;
          font-size: 18vw;
          transform: scaleX(.8) scaleY(1.0);
          transform-origin: center;
        }

        @media (min-width: 640px) {
          .hx-word {
            font-size: 14.5vw;
            line-height: .85;
            transform:  scaleY(1.2);
          }
        }

        @media (min-width: 1024px) {
          .hx-word {
            font-size: 13.2vw;
            transform:  scaleY(1.2);
          }
        }

        .hx-letter{display:inline-block;opacity:0;will-change:transform}

        .hx-base .hx-letter {
          color: #000000;
          -webkit-text-stroke: max(1.5px, .008em) var(--foreground);
        }
        .hx-lit .hx-letter {
          color: ${GOLD};
          -webkit-text-stroke: max(1.5px, .008em) ${GOLD};
          text-shadow: none;
        }

        .hx-lit {
          -webkit-mask-image: radial-gradient(
            circle var(--hx-r) at var(--mx, 50%) var(--my, 50%),
            #000 0%,
            transparent 100%
          );
          mask-image: radial-gradient(
            circle var(--hx-r) at var(--mx, 50%) var(--my, 50%),
            #000 0%,
            transparent 100%
          );
          overflow: visible;
        }

        .hx-go .hx-letter{
          animation:hx-place 1.15s cubic-bezier(.2,.9,.25,1) both;
          animation-delay:calc(var(--i) * ${LETTER_STAGGER_MS}ms);
        }
        .hx-go .hx-base .hx-letter{
          animation:
            hx-place 1.15s cubic-bezier(.2,.9,.25,1) both,
            hx-flash 1.1s ease-out both;
          animation-delay:
            calc(var(--i) * ${LETTER_STAGGER_MS}ms),
            calc(var(--i) * ${LETTER_STAGGER_MS}ms + 650ms);
        }

        @keyframes hx-place{
          0%{opacity:0;transform:translate(var(--dx),var(--dy)) rotate(var(--r)) scale(1.35)}
          55%{opacity:1}
          78%{transform:translate(0,.035em) rotate(calc(var(--r) * -.06)) scale(.985)}
          100%{opacity:1;transform:none}
        }
                @keyframes hx-flash {
          from {
            color: #E9E7E2;
            -webkit-text-stroke-color: var(--foreground);
          }
          to {
            color: #E9E7E2;
            -webkit-text-stroke-color: var(--foreground);
          }
        }

        .hx-rise{opacity:0}
        .hx-go .hx-rise{
          animation:hx-rise .9s cubic-bezier(.22,1,.36,1) both;
          animation-delay:calc(9 * ${LETTER_STAGGER_MS}ms + 500ms);
        }
        @keyframes hx-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}

        /* ---------- PROJECT CARDS ---------- */
        .hx-slot{opacity:0}
        .hx-go .hx-slot{
          animation:hx-card var(--d,13s) ease-in-out calc(var(--dl,0s) + 1.4s) infinite both;
        }
        @keyframes hx-card{
          0%{opacity:0;transform:translateY(18px) scale(.9) rotate(var(--rot,0deg))}
          10%{opacity:1;transform:translateY(0) scale(1) rotate(var(--rot,0deg))}
          72%{opacity:1;transform:translateY(-8px) scale(1) rotate(var(--rot,0deg))}
          88%,100%{opacity:0;transform:translateY(-20px) scale(.95) rotate(var(--rot,0deg))}
        }

        .hx-surface{
          container-type:inline-size;
          color:var(--foreground);
          border-color:color-mix(in srgb,var(--foreground) 14%,transparent);
          background:color-mix(in srgb,var(--foreground) 4%,var(--background,#fff));
          box-shadow:0 18px 40px -18px rgba(0,0,0,.35),0 2px 6px rgba(0,0,0,.06);
        }

        @media (prefers-reduced-motion:reduce){
          .hx-letter,.hx-rise{opacity:1!important;animation:none!important;transform:none!important}
          .hx-slot{opacity:.92!important;animation:none!important}
        }
      `}</style>

      {/* ================= BACKGROUND ================= */}
      <Backdrop />

      {/* Desktop social sidebar: absolute, so it does not affect the layout */}
      <aside className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 lg:flex xl:right-8">
        <RightSidebar />
      </aside>

      {/* ================= CONTENT ================= */}
      <div className="hx-root relative z-10 mx-auto flex min-h-svh max-w-[1800px] flex-col px-5 pb-8 pt-28 sm:px-8">
        {/* ---------- THE WORD + PROJECT CARDS (cards stay in this area only) ---------- */}
        <div className="relative flex min-h-88 flex-1 items-center justify-center py-8 sm:min-h-104 lg:min-h-112">
          <ProjectCards />

          <div
            ref={stageRef}
            aria-hidden
            className="hx-word relative z-10 w-fit select-none"
          >
            {/* Outline layer */}
            <div className="hx-base">
              <Letters />
            </div>

            {/* Gold layer, revealed only under the spotlight */}
            <div className="hx-lit pointer-events-none absolute inset-0">
              <Letters />
            </div>
          </div>
        </div>

        {/* ---------- NAME, ROLE, ACTIONS ---------- */}
        <div
          className="hx-rise grid gap-8 border-t pt-8 lg:grid-cols-[1fr_auto] lg:items-end"
          style={{
            borderColor: "color-mix(in srgb, var(--foreground) 14%, transparent)",
          }}
        >
          <div className="text-center lg:text-left">
            <p className="text-base sm:text-lg" style={{ color: MUTED }}>
              Hello, I&apos;m
            </p>

            <h1
              className="mt-1 font-bold leading-none tracking-tight text-(--foreground)"
              style={{ fontSize: "clamp(2.5rem, 3.4vw + 1rem, 5rem)" }}
            >
              Khaled Ammar
            </h1>

            <p
              className="mt-3 text-lg font-semibold sm:text-xl lg:text-2xl"
              style={{ color: GOLD_INK }}
            >
              UI/UX Designer &amp; Frontend Developer
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 lg:items-end">
            <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:justify-end">
              <div className="w-full sm:w-auto">
                <Button
                  text="View Projects"
                  variant="gold"
                  iconPosition="right"
                  normalIcon="/icons/right.svg"
                  pressedIcon="/icons/right.svg"
                  fullWidth
                  href="/projects"
                />
              </div>

              <div className="w-full sm:w-auto">
                <Button
                  text="Download CV"
                  variant="dark"
                  iconPosition="left"
                  normalIcon="/icons/download.svg"
                  pressedIcon="/icons/gold_download.svg"
                  fullWidth
                  onClick={() => setShowCvModal(true)}
                />
              </div>
            </div>

            {/* Socials below desktop */}
            <div className="flex gap-3 lg:hidden">
              <RightSidebar mobile />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CV DOWNLOAD MODAL ================= */}
      {showCvModal && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center px-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close CV download dialog"
            className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCvModal(false)}
          />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-md rounded-2xl border p-7 shadow-2xl"
            style={{
              background: "var(--background, #111116)",
              borderColor: "color-mix(in srgb, var(--foreground) 14%, transparent)",
            }}
          >
            <button
              type="button"
              onClick={() => setShowCvModal(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]"
              style={{ color: MUTED }}
            >
              <span className="text-xl leading-none">×</span>
            </button>

            <div
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: `color-mix(in srgb, ${GOLD} 15%, transparent)` }}
            >
              <img src="/icons/gold_download.svg" alt="" className="h-6 w-6" />
            </div>

            <h2
              id="cv-modal-title"
              className="text-2xl font-bold text-(--foreground)"
            >
              Download Khaled&apos;s CV?
            </h2>

            <p className="mt-3 text-sm leading-6" style={{ color: MUTED }}>
              Would you like to download Khaled Ammar&apos;s CV as a PDF?
            </p>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={() => setShowCvModal(false)}
                className="flex-1 rounded-xl border px-5 py-3 font-mono text-sm text-(--foreground) transition hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]"
                style={{
                  borderColor: "color-mix(in srgb, var(--foreground) 18%, transparent)",
                }}
              >
                No
              </button>

              <button
                type="button"
                onClick={handleDownloadCV}
                className="flex-1 rounded-xl bg-[#D4AF37] px-5 py-3 font-mono text-sm font-semibold text-[#0B0B0F] transition hover:bg-[#E5C454] active:scale-[0.98]"
              >
                Yes, Download
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}