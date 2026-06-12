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

      {/* ================= CAROUSEL ================= */}
      <div className="relative h-162.5 flex items-center justify-center mb-20">

        {/* LEFT CARD */}
        <motion.div
          onClick={goPrev}
          className="hidden md:block absolute left-[-20%] w-170 h-112.5 rounded-3xl overflow-hidden opacity-50 blur-[3px] scale-90 z-10 cursor-pointer"
        >
          <Image
            src={projects[prevIndex].image}
            alt={projects[prevIndex].title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          onClick={goNext}
          className="hidden md:block absolute right-[-20%] w-170 h-112.5 rounded-3xl overflow-hidden opacity-50 blur-[3px] scale-90 z-10 cursor-pointer"
        >
          <Image
            src={projects[nextIndex].image}
            alt={projects[nextIndex].title}
            fill
            className="object-cover"
          />
        </motion.div>

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

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Bottom Content */}
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

            {/* NAV BUTTONS */}
            <button
              onClick={goPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20"
            >
              ←
            </button>

            <button
              onClick={goNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20"
            >
              →
            </button>

            <div className="absolute top-6 right-6 flex items-center gap-2">
              <button className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-lg bg-black/30 backdrop-blur-md hover:border-[#D4AF37] transition">
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                />
              </button>
              <button className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-lg bg-black/30 backdrop-blur-md hover:border-[#D4AF37] transition">
                <ExternalLink size={16} className="text-white/60" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= DETAILS ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12  pt-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div className="border-2 border-[#D4AF37]/50 rounded-2xl p-6 bg-[#15161A]">
            <h3 className="text-[#D4AF37] text-lg mb-2">Overview</h3>
            <p className="text-white/70">{projects[current].overview}</p>
          </div>

          {/* CHALLENGES & SOLUTIONS */}
          <div className="border-2 border-[#D4AF37]/50 rounded-2xl p-6 bg-[#15161A]">

            <h3 className="text-lg mb-4 text-white">
              Challenges & Solutions
            </h3>

            <h5 className="text-sm text-[#D4AF37] mb-2">
              Key Challenges
            </h5>

            <ul className="space-y-2 mb-4">
              {projects[current].problem.map((item, i) => (
                <li key={i} className="text-white/70 text-sm">
                  • {item}
                </li>
              ))}
            </ul>

            <h5 className="text-sm text-[#D4AF37] mb-2">
              Our Solutions
            </h5>

            <ul className="space-y-2">
              {projects[current].solution.map((item, i) => (
                <li key={i} className="text-white/70 text-sm">
                  • {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="flex gap-4">
            <Button text="View Full Details" variant="gold" iconPosition="right" normalIcon="/icons/right.svg" pressedIcon="/icons/right.svg" />
            <Button text="All Projects" variant="dark" iconPosition="right" normalIcon="/icons/white_right.svg" pressedIcon="/icons/gold_right.svg" />
          </div>


        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          <div className="border-2 border-[#D4AF37]/50 rounded-2xl p-6 bg-[#15161A]">
            <h3 className="text-[#D4AF37] text-lg mb-2">Project Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70 ">
                <User size={32} className="text-[#D4AF37] border border-[#D4AF37] p-1 rounded-md" />
                <span>Client: {projects[current].info.client}</span>
              </div>

              <div className="flex items-center gap-2 text-white/70">
                <Clock size={32} className="text-[#D4AF37] border border-[#D4AF37] p-1 rounded-md" />
                <span>Duration: {projects[current].info.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-white/70">
                <Briefcase size={32} className="text-[#D4AF37] border border-[#D4AF37] p-1 rounded-md" />
                <span>Role: {projects[current].info.role}</span>
              </div>

            </div>
          </div>

          <div className="border-2 border-[#D4AF37]/50 rounded-2xl p-6 bg-[#15161A]">
            <h3 className="text-[#D4AF37] text-lg mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {projects[current].technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-2 border-[#D4AF37]/50 rounded-2xl p-6 bg-[#15161A]">
            <h3 className="text-[#D4AF37] text-lg mb-2">Impact & Result</h3>
            <p className="text-white/70">{projects[current].impact}</p>
          </div>

        </div>

      </div>
    </div>
  );
}