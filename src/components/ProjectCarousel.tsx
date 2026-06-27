"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { User, Clock, Briefcase, ExternalLink} from "lucide-react";
import Button from "@/components/ui/Button";
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;

  overview: string;

  problem: string[];
  solution: string[];

  info: {
    client: string;
    duration: string;
    role: string;
  };

  technologies: string[];
  impact: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: Props) {
  const [current, setCurrent] = useState(0);

  const prevIndex = (current - 1 + projects.length) % projects.length;
  const nextIndex = (current + 1) % projects.length;

  const goNext = () => setCurrent((prev) => (prev + 1) % projects.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -80) goNext();
    if (info.offset.x > 80) goPrev();
  };

  return (
    <div className="relative">

<>
 {/* ================= DESKTOP ================= */}
<div className="hidden lg:flex justify-center mb-24">
  <div className="flex items-start gap-5">

    <div className="w-50.75 h-175 rounded-[10px] bg-red-500 mt-21" />

    <div className="w-50.75 h-175 rounded-[10px] bg-blue-500 mt-46.5" />

    <div className="w-50.75 h-175 rounded-[10px] bg-green-500 mt-px" />

    <div className="w-50.75 h-175 rounded-[10px] bg-yellow-500 mt-16.5" />

    <div className="w-50.75 h-175 rounded-[10px] bg-purple-500 mt-28.75" />

    <div className="w-50.75 h-175 rounded-[10px] bg-pink-500 mt-0" />

  </div>
</div>

  {/* ================= MOBILE ================= */}
  <div className="lg:hidden relative h-162.5 flex items-center justify-center mb-24"> 

    {/* CENTER CARD */}
    <AnimatePresence mode="wait">
      <motion.div
        key={projects[current].id}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.35 }}
        className="relative w-200 h-130 rounded-4xl overflow-hidden border-2 border-[#D4AF37] z-20 cursor-grab active:cursor-grabbing"
      >
        <Image
          src={projects[current].image}
          alt={projects[current].title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-0 left-0 right-0 p-8 overflow-hidden">
          <div
            className="absolute inset-0 backdrop-blur-xl"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
            }}
          />

          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black" />

          <div className="relative">
            <p className="text-[#D4AF37] text-sm mb-2">
              {projects[current].category}
            </p>

            <h3 className="text-white text-3xl font-semibold">
              {projects[current].title}
            </h3>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

            {/* BOTTOM CONTROLS */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8">

          {/* PREV */}
          <button
            onClick={goPrev}
            className="group w-14 h-14 rounded-full border border-[#D4AF37] bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <Image
              src="/icons/gold_right.svg"
              alt="Previous"
              width={20}
              height={20}
              className="rotate-180"
            />
          </button>

          {/* DOTS */}
          <div className="flex items-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 h-2 bg-[#D4AF37]"
                    : "w-2 h-2 bg-[#D4AF37]/40 hover:bg-[#D4AF37]/70"
                }`}
              />
            ))}
          </div>

          {/* NEXT */}
          <button
            onClick={goNext}
            className="group w-14 h-14 rounded-full border border-[#D4AF37] bg-white/5 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <Image
              src="/icons/gold_right.svg"
              alt="Next"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
  
</>

      {/* ================= DETAILS ================= */}
      <div className="space-y-10 mt-24 mb-24">

        {/* OVERVIEW */}
        <div className="border-2 border-[#D4AF37]/50 rounded-2xl p-8 bg-[#15161A]">
          <h3 className="text-[#D4AF37] text-lg mb-4">
            Overview
          </h3>

          <p className="text-white/70 leading-7">
            {projects[current].overview}
          </p>
        </div>

        {/* CHALLENGES & SOLUTIONS */}
        <div className="border-2 border-[#D4AF37]/50 rounded-2xl p-8 bg-[#15161A]">
          <h3 className="text-xl text-white mb-6">
            Challenges & Solutions
          </h3>

          <div className="mb-8">
            <h5 className="text-sm text-[#D4AF37] mb-3">
              Key Challenges
            </h5>

            <ul className="space-y-3">
              {projects[current].problem.map((item, i) => (
                <li
                  key={i}
                  className="text-white/70 leading-6"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm text-[#D4AF37] mb-3">
              Our Solutions
            </h5>

            <ul className="space-y-3">
              {projects[current].solution.map((item, i) => (
                <li
                  key={i}
                  className="text-white/70 leading-6"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">

          <Button
            text="View Full Details"
            variant="gold"
            iconPosition="right"
            normalIcon="/icons/right.svg"
            pressedIcon="/icons/right.svg"
          />

          <Button
            text="All Projects"
            variant="dark"
          />
        </div>
      </div>
    </div>
  );
}