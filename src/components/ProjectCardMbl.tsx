"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCardMbl({
  project,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[10px]
        border border-[#D4AF37]/60
        bg-black
      "
    >
      {/* ================= PROJECT IMAGE ================= */}
      <div
        className="
          relative
          w-full
          aspect-4/3
          overflow-hidden
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Dark Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-black/85
            via-black/20
            to-transparent
          "
        />

        {/* ================= PROJECT LINKS ================= */}
        <div
          className="
            absolute
            top-4
            right-4
            z-10
            flex
            items-center
            gap-2
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
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-[10px]
                border
                border-white/20
                bg-black/40
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#D4AF37]
                hover:bg-black/60
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
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-[10px]
                border
                border-white/20
                bg-black/40
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#D4AF37]
                hover:bg-black/60
              "
            >
              {/* Add Figma icon here */}
            </a>
          )}
        </div>

        {/* ================= TITLE ON IMAGE ================= */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-10
            p-5
          "
        >
          {/* Category */}
          <p
            className="
              mb-1
              text-xs
              text-[#D4AF37]
            "
          >
            {project.category}
          </p>

          {/* Title */}
          <h3
            className="
              text-xl
              font-semibold
              text-white
            "
          >
            {project.title}
          </h3>
        </div>
      </div>

      {/* ================= PROJECT INFO ================= */}
      <div className="p-5">
        {/* Overview */}
        <div className="mb-6">
          <p
            className="
              mb-2
              text-xs
              font-medium
              uppercase
              tracking-[0.15em]
              text-[#D4AF37]
            "
          >
            Overview
          </p>

          <p
            className="
              text-sm
              leading-6
              text-white/65
            "
          >
            {project.overview}
          </p>
        </div>

        {/* ================= PROJECT DETAILS ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            border-t
            border-white/10
            pt-5
          "
        >
          <div>
            <p
              className="
                mb-1
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-white/40
              "
            >
              Client
            </p>

            <p className="text-sm text-white/80">
              {project.info.client}
            </p>
          </div>

          <div>
            <p
              className="
                mb-1
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-white/40
              "
            >
              Duration
            </p>

            <p className="text-sm text-white/80">
              {project.info.duration}
            </p>
          </div>

          <div>
            <p
              className="
                mb-1
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-white/40
              "
            >
              Role
            </p>

            <p className="text-sm text-white/80">
              {project.info.role}
            </p>
          </div>
        </div>

        {/* ================= TECHNOLOGIES ================= */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
            border-t
            border-white/10
            pt-5
          "
        >
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1
                text-xs
                text-white/60
              "
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

