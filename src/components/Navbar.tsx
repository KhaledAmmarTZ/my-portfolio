"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/30
      backdrop-blur-md
      border-b
      border-white/10
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">

        {/* Logo */}
        <h1 className="
          text-white
          text-2xl
          font-bold
        ">
          KA
        </h1>

        {/* Desktop Menu */}
        <ul className="
          hidden
          md:flex
          items-center
          gap-8
          text-white
        ">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="
            md:hidden
            text-white
            text-2xl
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="
          md:hidden
          bg-black
          px-6
          pb-6
        ">

          <ul className="
            flex
            flex-col
            gap-4
            text-white
          ">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>
      )}

    </nav>
  );
}