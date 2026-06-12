"use client";

import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0B0B0F]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-sm">
            Featured Work
          </span>

          <h2 className="mt-4 text-5xl text-white">
            Selected Projects
          </h2>

          <p className="mt-4 text-[#A1A1AA] max-w-2xl mx-auto">
            A showcase of recent work spanning design systems,
            web applications, and digital experiences.
          </p>
        </div>

        <ProjectCarousel projects={projects} />

      </div>
    </section>
  );
}