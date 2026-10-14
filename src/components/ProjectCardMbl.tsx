"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { KeyboardEvent } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCardMbl({
  project,
}: ProjectCardProps) {
  const router = useRouter();

  const openProject = () => {
    router.push(`/projects/${project.id}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  return (
    <article
      role="link"
      tabIndex={0}
      aria-label={`View ${project.title} project details`}
      onClick={openProject}
      onKeyDown={handleKeyDown}
      className="
        group relative w-full min-w-0 cursor-pointer
        overflow-hidden rounded-md
        border border-[#D4AF37]/30
        bg-transparent
        transition-all duration-300
        hover:border-[#D4AF37]/80
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#D4AF37]
      "
    >
      {/* Project image */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 639px) 50vw, 300px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />

        {/* Project title */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white sm:text-base">
            {project.title}
          </h3>

          <span className="mt-1 block text-[10px] text-white/65 sm:text-xs">
            View project ↗
          </span>
        </div>
      </div>
    </article>
  );
}