"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data/navItems";
import Button from "@/components/ui/Button";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-100px 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0B0F]/70 border-b border-white/10">
      <div className="mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white font-bold text-2xl shrink-0">
          KA
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
              >
                <a
                  href={item.href}
                  onClick={() => setActive(item.href)}
                  className={`transition-colors duration-200 ${
                    active === item.href
                      ? "text-[#D4AF37]"
                      : "text-white"
                  } group-hover:text-[#D4AF37]`}
                >
                  {item.label}
                </a>

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                    active === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setActive("#contact")}
          >
            <Button
              text="Contact"
              icon={<ArrowRight size={18} />}
              variant="gold"
            />
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#0B0B0F] border-t border-white/10">

          <ul className="px-4 py-4 flex flex-col gap-4">

            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    setMenuOpen(false);
                  }}
                  className={`block py-2 ${
                    active === item.href
                      ? "text-[#D4AF37]"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => {
                  setActive("#contact");
                  setMenuOpen(false);
                }}
              >
                <Button
                  fullWidth
                  text="Contact"
                  variant="gold"
                />
              </a>
            </div>

          </ul>

        </div>
      )}
    </nav>
  );
}