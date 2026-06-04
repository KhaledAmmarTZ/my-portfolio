"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
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
    <section className="relative bg-[#0B0B0F] min-h-screen overflow-hidden">

      {/* ================= DESKTOP LAYER ================= */}
      <div className="hidden md:block">

        {/* LEFT DECORATION IMAGE */}
        <div className="absolute -left-2.5 top-0 z-0 pointer-events-none">
          <Image
            src="/images/Golden tree1.svg"
            alt="decoration"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="relative w-400 h-500">
            <Image
              src="/images/Hero_Image.svg"
              alt="profile"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div className="absolute left-32 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-6">
          <div className="flex items-center gap-2 bg-[#15161A] border border-[#D4AF37]/30 px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
            <span className="text-sm text-gray-300">
              Available for new projects
            </span>
          </div>

          <div>
            <p className="text-gray-400 text-2xl">Hello, I'm</p>
            <h1 className="text-white text-6xl font-bold">
              Khaled Ammar
            </h1>
          </div>
        </div>

        {/* FLOATING TEXT */}
        <div className="absolute right-80 top-48 z-10 text-right">
          <h2 className="text-white text-6xl font-bold leading-tight">
            Design First <br />
            Code later
          </h2>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="absolute right-32 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">

          {social.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onMouseDown={() => setPressedId(item.id)}
              onMouseUp={() => setPressedId(null)}
              onMouseLeave={() => setPressedId(null)}
              className={`
                w-12 h-12 flex items-center justify-center
                bg-[#15161A]
                border border-[#D4AF37]/40
                rounded-xl
                transition-all duration-150
                ${pressedId === item.id ? "shadow-[0_0_18px_rgba(212,175,55,0.45)] scale-95" : ""}
              `}
            >
              <Image
                src={pressedId === item.id ? item.active : item.normal}
                alt={item.id}
                width={18}
                height={18}
              />
            </a>
          ))}

        </aside>

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-10 w-full flex flex-col items-center gap-8 z-10">
          <h1 className="text-[#D4AF37] text-[48px] font-bold text-center">
            UI/UX Designer & Frontend Developer
          </h1>

          <div className="flex gap-4">
            <Button text="View Projects" variant="gold" iconPosition="right" normalIcon="/icons/right.svg" pressedIcon="/icons/right.svg" />
            <Button text="Download CV" variant="dark" iconPosition="left" normalIcon="/icons/download.svg" pressedIcon="/icons/gold_download.svg" />
          </div>
        </div>

      </div>

      {/* ================= MOBILE LAYOUT (NO OVERLAP) ================= */}
      <div className="md:hidden flex flex-col items-center px-6 pt-20 pb-10 gap-10">

        {/* IMAGE FIRST */}
        <Image
          src="/images/Hero_Image.svg"
          alt="profile"
          width={250}
          height={250}
          className="object-contain"
        />

        {/* TEXT */}
        <div className="text-center">
          <p className="text-gray-400 text-lg">Hello, I'm</p>
          <h1 className="text-white text-3xl font-bold">
            Khaled Ammar
          </h1>
        </div>

        

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 w-full">
            <Button text="View Projects" variant="gold" iconPosition="right" normalIcon="/icons/right.svg" pressedIcon="/icons/right.svg" />
            <Button text="Download CV" variant="dark" iconPosition="left" normalIcon="/icons/download.svg" pressedIcon="/icons/gold_download.svg" />
        </div>

          {/* QUOTE */}
        <h2 className="text-white text-2xl font-bold text-center">
          Design First 
          Code later
        </h2>

        {/* SOCIAL (HORIZONTAL) */}
        <div className="flex gap-3 mt-4">

          {social.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onMouseDown={() => setPressedId(item.id)}
              onMouseUp={() => setPressedId(null)}
              onMouseLeave={() => setPressedId(null)}
              className={`
                w-12 h-12 flex items-center justify-center
                bg-[#15161A]
                border border-[#D4AF37]/40
                rounded-xl
                transition-all duration-150
                ${pressedId === item.id ? "shadow-[0_0_18px_rgba(212,175,55,0.45)] scale-95" : ""}
              `}
            >
              <Image
                src={pressedId === item.id ? item.active : item.normal}
                alt={item.id}
                width={18}
                height={18}
              />
            </a>
          ))}

        </div>

      </div>

    </section>
  );
}