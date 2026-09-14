"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navItems";
import Button from "@/components/ui/Button";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold text-white transition-colors duration-200 hover:text-[#D4AF37]"
        >
          Khaled Ammar
        </Link>

        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}
        <div className="flex items-center gap-10">

          {/* =================================================
              DESKTOP NAV
          ================================================== */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li
                  key={item.label}
                  className="group relative cursor-pointer"
                >
                  <Link
                    href={item.href}
                    className={`
                      transition-colors duration-200
                      ${
                        active
                          ? "text-[#D4AF37]"
                          : "text-white"
                      }
                      group-hover:text-[#D4AF37]
                    `}
                  >
                    {item.label}
                  </Link>

                  {/* GOLD BAR */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5
                      bg-[#D4AF37]
                      transition-all duration-300
                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </li>
              );
            })}
          </ul>

          {/* =================================================
              CONTACT BUTTON
          ================================================== */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                text="Contact"
                icon={<ArrowRight size={18} />}
                variant="gold"
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white transition-colors duration-200 hover:text-[#D4AF37] md:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0B0B0F]/95 px-6 pb-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-2 pt-4">

            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block rounded-lg px-3 py-3
                      transition-colors duration-200
                      ${
                        active
                          ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                          : "text-white hover:bg-white/5 hover:text-[#D4AF37]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            {/* MOBILE CONTACT */}
            <li className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
              >
                <Button
                  fullWidth
                  text="Contact"
                  variant="gold"
                  icon={<ArrowRight size={18} />}
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}