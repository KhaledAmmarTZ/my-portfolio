"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navItems";
import Button from "@/components/ui/Button";
import { ArrowRight, Menu, X, ArrowUpRight } from "lucide-react";

const INTRO_KEY = "logo-intro-seen";
const INTRO_HOLD_MS = 800; // how long the big logo stays centered
const INTRO_MOVE_MS = 1500; // how long the glide into the navbar takes

type Phase = "intro" | "moving" | "done";

type Fly = {
  left: number;
  top: number;
  size: number;
  dx: number;
  dy: number;
  scale: number;
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [lens, setLens] = useState({ left: 0, width: 0, visible: false });

  const [phase, setPhase] = useState<Phase>("intro");
  const [fly, setFly] = useState<Fly | null>(null);

  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pillRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeIndex = navItems.findIndex((item) => isActive(item.href));

  /* ---------- First-visit logo intro ---------- */
  useLayoutEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {}

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = logoRef.current;

    if (seen || reduceMotion || !el || window.scrollY > 32) {
      setPhase("done");
      return;
    }

    // Where the logo lives inside the navbar
    const r = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    setFly({
      left: r.left,
      top: r.top,
      size: r.width,
      dx: vw / 2 - (r.left + r.width / 2),
      dy: vh / 2 - (r.top + r.height / 2),
      scale: Math.min(7, (Math.min(vw, vh) * 0.38) / r.width),
    });

    const t1 = setTimeout(() => setPhase("moving"), INTRO_HOLD_MS);
    const t2 = setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {}
    }, INTRO_HOLD_MS + INTRO_MOVE_MS + 50);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Lock page scroll while the intro plays
  useEffect(() => {
    if (phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  /* ---------- Shrink the pill on scroll ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Glass lens follows hover, rests on active page ---------- */
  const target = hovered ?? (activeIndex >= 0 ? activeIndex : null);

  useLayoutEffect(() => {
    const measure = () => {
      const el = target !== null ? linkRefs.current[target] : null;
      if (!el) {
        setLens((l) => ({ ...l, visible: false }));
        return;
      }
      setLens({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target, pathname]);

  /* ---------- Close mobile menu on route change / Escape ---------- */
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  /* ---------- Cursor-following gold light inside the glass ---------- */
  const onPillMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const pill = pillRef.current;
    if (!pill) return;
    const rect = pill.getBoundingClientRect();
    pill.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    pill.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      {/* =====================================================
          INTRO: dark screen + big logo gliding into the navbar
      ====================================================== */}
      {phase !== "done" && (
        <>
          <div
            aria-hidden
            className={`fixed inset-0 z-60 bg-(--background) transition-opacity duration-1300 ease-out ${
              phase === "moving" ? "opacity-0" : "opacity-100"
            }`}
          />
          {fly && (
            <div
              aria-hidden
              className="pointer-events-none fixed z-70 will-change-transform"
              style={{
                left: fly.left,
                top: fly.top,
                width: fly.size,
                height: fly.size,
                transformOrigin: "center",
                transform:
                  phase === "intro"
                    ? `translate(${fly.dx}px, ${fly.dy}px) scale(${fly.scale})`
                    : "translate(0px, 0px) scale(1)",
                transition: `transform ${INTRO_MOVE_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`,
              }}
            >
              {/* Larger source so it stays sharp while scaled up */}
              <Image
                src="/icons/logo2.png"
                alt=""
                width={256}
                height={256}
                priority
                className="size-full object-contain"
                style={{
                  opacity: phase === "intro" ? 1 : 1,
                  animation: "logoIntroFadeIn 500ms ease-in-out both",
                }}
              />
            </div>
          )}
        </>
      )}

      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 ${
          phase === "moving" ? "transition-opacity duration-1400" : ""
        } ${phase === "intro" ? "opacity-0" : "opacity-100"}`}
      >
        {/* =====================================================
            THE GLASS PILL
        ====================================================== */}
        <div
          ref={pillRef}
          onMouseMove={onPillMove}
          className={`
            group/pill pointer-events-auto relative flex items-center
            w-[calc(100vw-2rem)] justify-between md:w-auto
            rounded-full border border-white/15
            bg-(--navbar-background) backdrop-blur-2xl backdrop-saturate-150
            shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(255,255,255,0.04)]
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              scrolled
                ? "gap-4 py-1.5 pl-1.5 pr-1.5 md:gap-5"
                : "gap-8 py-2.5 pl-3 pr-3 md:gap-10"
            }
          `}
        >
          {/* Gold light that tracks the cursor */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover/pill:opacity-100"
            style={{
              background:
                "radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(212,175,55,0.22), transparent 70%)",
            }}
          />

          {/* =================================================
              LOGO: image + name that folds away on scroll
          ================================================== */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Khaled Ammar, home"
            className="relative flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
          >
            {/* Hidden until the intro logo lands on top of it */}
            <span
              ref={logoRef}
              className={`block size-10 shrink-0 transition-transform duration-500 hover:rotate-[-8deg] ${
                phase === "done" ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/icons/logo2.png"
                alt="Khaled Ammar logo"
                width={40}
                height={40}
                priority
                className="size-10 shrink-0 object-contain"
              />
            </span>

            <span
              className={`grid transition-[grid-template-columns,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                scrolled
                  ? "grid-cols-[0fr] opacity-0"
                  : "grid-cols-[1fr] opacity-100"
              }`}
            >
              <span className="overflow-hidden whitespace-nowrap pr-1 text-lg font-bold tracking-tight text-(--foreground)">
                Khaled Ammar
              </span>
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAV with sliding glass lens
          ================================================== */}
          <ul
            ref={listRef}
            onMouseLeave={() => setHovered(null)}
            className="relative hidden items-center md:flex"
          >
            {/* The lens */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 h-9 -translate-y-1/2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_18px_rgba(212,175,55,0.25)] backdrop-blur-sm transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
              style={{
                left: lens.left,
                width: lens.width,
                opacity: lens.visible ? 1 : 0,
              }}
            />

            {navItems.map((item, i) => {
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    ref={(el) => {
                      linkRefs.current[i] = el;
                    }}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onMouseEnter={() => setHovered(i)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    className={`
                      relative block rounded-full px-4 py-2 text-sm font-medium
                      transition-colors duration-300
                      focus-visible:outline-2 focus-visible:outline-[#D4AF37]
                      ${
                        active || hovered === i
                          ? "text-[#D4AF37]"
                          : "text-(--foreground)"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* =================================================
              CONTACT + MOBILE TOGGLE
          ================================================== */}
          <div className="relative flex items-center gap-2">
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-[#D4AF37]
                  bg-[#D4AF37] px-5 py-2.5
                  text-sm font-medium text-[#0B0B0F]
                  transition-all duration-300
                  hover:bg-transparent hover:text-[#D4AF37]
                "
              >
                Let's talk
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <button
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="relative grid size-10 place-items-center rounded-full border border-white/15 bg-white/5 text-(--foreground) transition-colors duration-200 hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#D4AF37] md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU: full-screen frosted sheet, large type
      ====================================================== */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`
          fixed inset-0 z-40 md:hidden
          bg-[#0B0B0F]/70 backdrop-blur-2xl backdrop-saturate-150
          transition-[opacity,clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            menuOpen
              ? "pointer-events-auto opacity-100 [clip-path:circle(150%_at_calc(100%-2.5rem)_2.5rem)]"
              : "pointer-events-none opacity-0 [clip-path:circle(0%_at_calc(100%-2.5rem)_2.5rem)]"
          }
        `}
      >
        {/* Warm glow in the corner */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-[#D4AF37]/20 blur-3xl"
        />

        <nav className="relative flex h-full flex-col justify-center px-8 pb-10 pt-24">
          <ul className="flex flex-col">
            {navItems.map((item, i) => {
              const active = isActive(item.href);
              return (
                <li
                  key={item.label}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    tabIndex={menuOpen ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-4 border-b border-white/10 py-4 text-4xl font-semibold tracking-tight transition-colors duration-200 hover:text-[#D4AF37] ${
                      active ? "text-[#D4AF37]" : "text-white"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-2 rounded-full bg-[#D4AF37] transition-all duration-500 ${
                        active ? "w-8" : "w-0"
                      }`}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`mt-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen
                ? `${120 + navItems.length * 60}ms`
                : "0ms",
            }}
          >
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              <Button
                fullWidth
                text="Contact"
                variant="gold"
                icon={<ArrowRight size={18} />}
              />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}