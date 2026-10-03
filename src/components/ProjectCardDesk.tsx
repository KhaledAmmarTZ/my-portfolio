"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { KeyboardEvent, MouseEvent } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
project: Project;
marginTop: string;
};

export default function ProjectCardDesk({
project,
marginTop,
}: ProjectCardProps) {
const router = useRouter();

const openProject = () => {
router.push(`/projects/${project.id}`);
};

const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
if (event.key === "Enter" || event.key === " ") {
event.preventDefault();
openProject();
}
};

const handleExternalClick = (event: MouseEvent<HTMLAnchorElement>) => {
event.stopPropagation();
};

return (
<div
role="link"
tabIndex={0}
aria-label={`View ${project.title} project details`}
onClick={openProject}
onKeyDown={handleKeyDown}
className={`         relative min-w-0 flex-1
        h-175
        rounded-[10px]
        overflow-hidden
        cursor-pointer
        ${marginTop}
        border border-[#D4AF37]/60
        transition-[flex] duration-500 ease-out
        hover:flex-[2.1]
        group
      `}
> <Image
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

  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

  <div
    className="
      absolute top-4 right-4
      flex items-center gap-2
      opacity-0
      -translate-y-2
      group-hover:opacity-100
      group-hover:translate-y-0
      transition-all duration-300 ease-out
      z-20
    "
  >
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub repository"
        onClick={handleExternalClick}
        className="
          w-10 h-10 rounded-[10px]
          border border-white/20 bg-black/40
          backdrop-blur-md flex items-center justify-center
          hover:border-[#D4AF37] hover:bg-black/60
          transition-all duration-300
        "
      >
        <span className="text-white text-xs">GH</span>
      </a>
    )}

    {project.figma && (
      <a
        href={project.figma}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Figma design"
        onClick={handleExternalClick}
        className="
          w-10 h-10 rounded-[10px]
          border border-white/20 bg-black/40
          backdrop-blur-md flex items-center justify-center
          hover:border-[#D4AF37] hover:bg-black/60
          transition-all duration-300
        "
      >
        <span className="text-white text-xs">Fi</span>
      </a>
    )}
  </div>

  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 pointer-events-none">
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

    <h3 className="text-white text-xl font-semibold">
      {project.title}
    </h3>

    <p className="mt-2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      View project <span aria-hidden="true">↗</span>
    </p>
  </div>
</div>

);
}
