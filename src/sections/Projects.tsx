"use client";

import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B0B0F] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-16">

          {/* Top Row */}
          <div className="flex items-center justify-between">

            {/* Featured Work */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Featured Work
              </span>
            </div>
            
            {/* Button */}
            <div className="hidden md:flex w-fit">
              <Button
                text="see more project"
                variant="gold"
                iconPosition="right"
                normalIcon="/icons/right.svg"
                pressedIcon="/icons/right.svg"
              />
            </div>

          </div>

          {/* Center Heading */}
          <div className="mt-4 text-center">

            <h2 className="text-5xl text-white">
              Selected Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#A1A1AA]">
              A showcase of recent work spanning design systems,
              web applications, and digital experiences.
            </p>

          </div>

        </div>

        {/* ================= PROJECTS ================= */}
        <ProjectCarousel projects={projects} />

      </div>
    </section>
  );
}