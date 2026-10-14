"use client";

import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-background py-24 text-foreground transition-colors duration-300"
    >
      <div className="mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">

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
            <div className="hidden w-fit md:flex">
              <Link href="/projects">
                <Button
                  text="see more project"
                  variant="gold"
                  iconPosition="right"
                  normalIcon="/icons/right.svg"
                  pressedIcon="/icons/right.svg"
                />
              </Link>
            </div>
          </div>

          {/* Center Heading */}
          <div className="mt-4 text-center">
            <h2 className="text-5xl text-foreground">
              Selected Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
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