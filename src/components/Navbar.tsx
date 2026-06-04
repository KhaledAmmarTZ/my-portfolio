"use client";

import { useState } from "react";
import { navItems } from "@/data/navItems";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md ">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <div className="text-white font-bold text-2xl">
            KA
        </div>

        {/* RIGHT SIDE GROUP */}
        <div className="flex items-center gap-10">

            {/* NAV ITEMS */}
            <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <li key={item.label} className="relative group cursor-pointer">

                <a
                    href={item.href}
                    onClick={() => setActive(item.label)}
                    className={`
                    transition-colors duration-200
                    ${active === item.label ? "text-[#D4AF37]" : "text-white"}
                    group-hover:text-[#D4AF37]
                    `}
                >
                    {item.label}
                </a>

                {/* GOLD BAR */}
                <span
                    className={`
                    absolute left-0 -bottom-1 h-0.5 bg-[#D4AF37]
                    transition-all duration-300
                    ${active === item.label
                        ? "w-full"
                        : "w-0 group-hover:w-full"}
                    `}
                />
                </li>
            ))}
            </ul>

            {/* CONTACT BUTTON */}
            <div className="hidden md:block">
            <Button
                text="Contact"
                icon={<ArrowRight size={18} />}
                variant="gold"
            />
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            ☰
            </button>

        </div>
        </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6k">
          <ul className="flex flex-col gap-4">

            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setMenuOpen(false);
                  }}
                  className={`
                    block py-2
                    ${active === item.label ? "text-[#D4AF37]" : "text-white"}
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <div className="pt-4">
              <Button
                text="Contact"
                variant="gold"
              />
            </div>

          </ul>
        </div>
      )}

    </nav>
  );
}