"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  marginTop: string;
};

export default function ProjectCard({
  project,
  marginTop,
}: ProjectCardProps) {
  return (
    <div
      className={`
        relative min-w-0 flex-1
        h-175
        rounded-[10px]
        overflow-hidden
        ${marginTop}
        border border-[#D4AF37]/60
        transition-[flex] duration-500 ease-out
        hover:flex-[2.1]
        group
      `}
    >
      {/* Project Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 1280px) 20vw, 16vw"
        className="
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

      {/* Project Links */}
      <div
        className="
          absolute top-4 right-4
          flex items-center gap-2
          opacity-0
          -translate-y-2
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all duration-300 ease-out
          z-10
        "
      >
        {/* GitHub */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="
              w-10 h-10
              rounded-[10px]
              border border-white/20
              bg-black/40
              backdrop-blur-md
              flex items-center justify-center
              hover:border-[#D4AF37]
              hover:bg-black/60
              transition-all duration-300
            "
          >
            {/* Add GitHub icon here */}
          </a>
        )}

        {/* Figma */}
        {project.figma && (
          <a
            href={project.figma}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Figma design"
            className="
              w-10 h-10
              rounded-[10px]
              border border-white/20
              bg-black/40
              backdrop-blur-md
              flex items-center justify-center
              hover:border-[#D4AF37]
              hover:bg-black/60
              transition-all duration-300
            "
          >
            {/* Add Figma icon here */}
          </a>
        )}
      </div>

      {/* Project Title */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        {/* Category */}
        <p
          className="
            text-[#D4AF37] text-xs mb-1
            opacity-0 translate-y-2
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all duration-300
          "
        >
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold">
          {project.title}
        </h3>
      </div>
    </div>
  );
}