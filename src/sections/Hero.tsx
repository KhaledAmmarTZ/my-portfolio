"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import RightSidebar from "@/components/RightSidebar";
import { useState } from "react";

export default function Hero() {
  const [pressedId, setPressedId] = useState<string | null>(null);

  const social = [
    { id: "github", href: "", normal: "/icons/github.svg", active: "/icons/gold_github.svg" },
    { id: "linkedin", href: "", normal: "/icons/linkdin.svg", active: "/icons/gold_linkdin.svg" },
    { id: "email", href: "", normal: "/icons/email.svg", active: "/icons/gold_email.svg" },
    { id: "whatsapp", href: "", normal: "/icons/whatsapp.svg", active: "/icons/gold_whatsapp.svg" },
    { id: "behance", href: "", normal: "/icons/behance.svg", active: "/icons/gold_behance.svg" },
  ];

  return (
    <section id="home" className="relative bg-[#0B0B0F] min-h-screen overflow-hidden">

      {/* ================= DESKTOP LAYER ================= */}
      <div className="hidden md:block">

        <aside className="absolute right-32 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          <RightSidebar />
        </aside>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none"
        >
          <img
            src="/images/Frame 5.png"
            alt="Profile"
            className="relative z-0 pointer-events-none"
            draggable={false}
          />

          <img
            src="/images/Frame 4.png"
            alt="Portfolio"
            className="absolute z-10 w-148 h-148 top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            draggable={false}
          />
        </div>

        <div className="absolute bottom-10 w-full flex flex-col items-center gap-8 z-10">
          <h1 className="text-[#D4AF37] text-[48px] font-bold text-center">
            UI/UX Designer & Frontend Developer
          </h1>

          <div className="flex gap-4">
            <Button
              text="View Projects"
              variant="gold"
              iconPosition="right"
              normalIcon="/icons/right.svg"
              pressedIcon="/icons/right.svg"
            />

            <Button
              text="Download CV"
              variant="dark"
              iconPosition="left"
              normalIcon="/icons/download.svg"
              pressedIcon="/icons/gold_download.svg"
            />
          </div>
        </div>

      </div>

      {/* ================= MOBILE LAYOUT ================= */}
      <div className="md:hidden flex flex-col items-center px-6 pt-32 pb-10">

        <div className="relative w-full h-90 flex justify-center select-none">

          <img
            src="/images/Frame 5.png"
            alt="Profile"
            className="absolute z-4 top-20 pointer-events-none"
            draggable={false}
          />

          <img
            src="/images/Frame 4.png"
            alt="Portfolio"
            className="absolute z-10 w-72 h-72 top-20 left-1/2 -translate-x-1/2 pointer-events-none"
            draggable={false}
          />

        </div>

        <div className="flex flex-col items-center gap-8">

          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Hello, I'm
            </p>

            <h1 className="text-white text-3xl font-bold">
              Khaled Ammar
            </h1>
          </div>

          <div className="flex justify-center gap-3 w-full">
            <Button
              text="View Projects"
              variant="gold"
              iconPosition="right"
              normalIcon="/icons/right.svg"
              pressedIcon="/icons/right.svg"
            />

            <Button
              text="Download CV"
              variant="dark"
              iconPosition="left"
              normalIcon="/icons/download.svg"
              pressedIcon="/icons/gold_download.svg"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <RightSidebar mobile />
          </div>
        </div>
      </div>
    </section>
  );
}