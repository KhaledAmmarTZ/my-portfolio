"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import RightSidebar from "@/components/RightSidebar";
import { useState } from "react";

export default function About() {
    const [pressedSkill, setPressedSkill] = useState<number | null>(null);
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#0B0B0F] px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(212,175,55,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.5)_1px,transparent_1px)] bg-size-[60px_60px]
        "
      />

      {/* ================= DESKTOP ================= */}
      <div className="relative z-10 mx-auto hidden max-w-7xl md:block">
        <div className="grid min-h-175 grid-cols-2 items-center gap-16 lg:gap-24">

          {/* LEFT CONTENT */}
          <div>
            {/* Section label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-5xl font-bold leading-tight text-white lg:text-6xl">
              Turning ideas into{" "}
              <span className="text-[#D4AF37]">
                meaningful experiences.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              I'm Khaled Ammar, a UI/UX Designer and Frontend Developer
              passionate about creating digital experiences that are
              intuitive, visually engaging, and purposeful.
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-500">
              I enjoy transforming complex ideas into simple interfaces
              and bringing those designs to life through modern frontend
              technologies.
            </p>

            <div className="flex gap-4 mt-10">
                <Button
                text="More About Me"
                variant="gold"
                iconPosition="right"
                normalIcon="/icons/right.svg"
                pressedIcon="/icons/right.svg"
                />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">

            {/* Outer ring */}
            <div
              className="
                absolute
                h-120
                w-120
                animate-[spin_20s_linear_infinite]
                rounded-full
                border
                border-[#D4AF37]/15
              "
            >
              {/* Ring indicator */}
              <div className="absolute left-1/2 -top-1.25 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
            </div>


            {/* Image glow */}
            <div className="absolute h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[90px]" />

            {/* Photo */}
            <div
              className="
                relative
                z-10
                h-100
                w-100   
                overflow-hidden
                rounded-full
                border
                border-[#D4AF37]/10
                bg-white/3
                shadow-[0_25px_80px_rgba(0,0,0,0.5)]
              "
            >
              <Image
                src="/images/Frame 4.png"
                alt="Khaled Ammar"
                fill
                className="object-cover"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0F]/70 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div
              className="
                absolute
                -left-8
                bottom-14
                z-20
                animate-[bounce_4s_ease-in-out_infinite]
                rounded-2xl
                border
                border-white/10
                bg-[#111116]/80
                px-5
                py-4
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <span className="text-[#D4AF37]">✦</span>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Currently
                  </p>

                  <p className="text-sm font-medium text-white">
                    Designing & Building
                  </p>
                </div>
              </div>
            </div>

            {/* Floating code element */}
            <div
              className="
                absolute
                -right-5
                top-20
                z-20
                animate-[bounce_5s_ease-in-out_infinite]
                rounded-xl
                border
                border-[#D4AF37]/10
                bg-[#111116]/80
                px-4
                py-3
                font-mono
                text-xs
                text-[#D4AF37]
                backdrop-blur-xl
              "
            >
              &lt;design /&gt;
            </div>
          </div>
            </div>
            {/* Skills / Focus */}
            <div className="mt-5 flex flex-wrap items-start gap-4 lg:gap-5">
            {[
                { title: "UI/UX", subtitle: "Design" },
                { title: "Frontend", subtitle: "Development" },
                { title: "Motion Graphic Designer", subtitle: "Design" },
                { title: "AI", subtitle: "Exploration" },
            ].map((skill) => (
                <div
                key={skill.title}
                className="
                    group
                    relative
                    w-fit
                    max-w-full
                    overflow-hidden
                    rounded-2xl
                    p-px
                "
                >
                {/* Rotating border glow */}
                <div
                    className="
                    absolute
                    -inset-full
                    animate-[spin_5s_linear_infinite]
                    bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#D4AF37_340deg,transparent_360deg)]
                    "
                />

                {/* Card */}
                <div
                    className="
                    relative
                    w-fit
                    max-w-full
                    rounded-2xl
                    bg-[#0B0B0F]
                    px-5
                    py-4
                    transition-all
                    duration-300
                    group-hover:bg-[#111116]
                    "
                >
                    {/* Inner glow */}
                    <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-2xl
                        opacity-0
                        shadow-[inset_0_0_25px_rgba(212,175,55,0.08)]
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                    "
                    />

                    <div className="relative z-10">
                    <p className="whitespace-normal wrap-break-word text-base font-semibold leading-tight text-white">
                        {skill.title}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                        {skill.subtitle}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="relative z-10 md:hidden">

        {/* Heading */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4AF37]" />

            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white">
            Turning ideas into{" "}
            <span className="text-[#D4AF37]">
              experiences.
            </span>
          </h2>
        </div>

        {/* Image */}
        <div className="relative mt-14 flex justify-center">

          {/* Glow */}
          <div className="absolute top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[80px]" />
        
         {/* Outer ring */}
            <div
              className="
                absolute
                top-1/2
                h-80
                w-80
                -translate-y-1/2
                animate-[spin_20s_linear_infinite]
                rounded-full
                border
                border-[#D4AF37]/15
              "
            >
              {/* Ring indicator */}
              <div className="absolute left-1/2 -top-1.25 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
            </div>

          {/* Photo */}
          <div
            className="
              relative
              z-10
              h-70
              w-70
              overflow-hidden
              rounded-full
              border
              border-white/10
              bg-white/3
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            "
          >
            <Image
              src="/images/Frame 4.png"
              alt="Khaled Ammar"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#0B0B0F]/70 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              z-20
              -translate-x-1/2
              whitespace-nowrap
              rounded-full
              border
              border-white/10
              bg-[#111116]/90
              px-5
              py-2.5
              text-xs
              text-gray-300
              backdrop-blur-xl
            "
          >
            UI/UX · Motion · AI
          </div>
        </div>

        {/* Description */}
        <div className="mt-14">
          <p className="text-base leading-7 text-gray-400">
            I'm Khaled Ammar, a UI/UX Designer and Frontend Developer
            passionate about creating digital experiences that are
            intuitive, visually engaging, and purposeful.
          </p>

          <p className="mt-5 text-base leading-7 text-gray-500">
            I enjoy transforming complex ideas into simple interfaces
            and bringing those designs to life with modern frontend
            technologies.
          </p>

          {/* Button */}
          <div className=" mt-10 flex flex-col  w-full">
                <Button
                text="More About Me"
                variant="gold"
                iconPosition="right"
                normalIcon="/icons/right.svg"
                pressedIcon="/icons/right.svg"
                fullWidth
                />
            </div>
            
            {/* Skills / Focus */}
<div className="mt-8 grid w-full grid-cols-2 gap-3">
  {[
  { title: "UI/UX", subtitle: "Design" },
  { title: "Frontend", subtitle: "Development" },
  { title: "Motion Graphic Designer", subtitle: "Design" },
  { title: "AI", subtitle: "Exploration" },
].map((skill, index) => {
  const pressed = pressedSkill === index;

  return (
    <div
      key={skill.title}
      className="
        relative
        min-w-0
        overflow-hidden
        rounded-2xl
        p-px
      "
      onTouchStart={() => setPressedSkill(index)}
      onTouchEnd={() => setPressedSkill(null)}
      onTouchCancel={() => setPressedSkill(null)}
    >
      {/* Rotating border glow */}
      <div
        className="
          absolute
          -inset-full
          animate-[spin_5s_linear_infinite]
          bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#D4AF37_340deg,transparent_360deg)]
        "
      />

        {/* Card */}
        <div
          className={`
            relative
            flex
            min-h-20.5
            w-full
            items-center
            rounded-2xl
            bg-[#0B0B0F]
            px-4
            py-3
            transition-all
            duration-300
            ${pressed ? "bg-[#111116]" : ""}
          `}
        >
          {/* Inner glow */}
          <div
            className={`
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              shadow-[inset_0_0_25px_rgba(212,175,55,0.08)]
              transition-opacity
              duration-300
              ${pressed ? "opacity-100" : "opacity-0"}
            `}
          />

          <div className="relative z-10 min-w-0">
            <p className="wrap-break-word text-sm font-semibold leading-tight text-white">
              {skill.title}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              {skill.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
        </div>
      </div>
    </section>
  );
}
