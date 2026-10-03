"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { KeyboardEvent, MouseEvent } from "react";
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

const handleExternalClick = (event: MouseEvent<HTMLAnchorElement>) => {
event.stopPropagation();
};

return (
<article
role="link"
tabIndex={0}
aria-label={`View ${project.title} project details`}
onClick={openProject}
onKeyDown={handleKeyDown}
className="
group relative w-full overflow-hidden
rounded-[10px] border border-[#D4AF37]/60
bg-white/5 cursor-pointer
focus-visible:outline-2 focus-visible:outline-[#D4AF37]
"
> <div className="relative w-full aspect-4/3 overflow-hidden"> <Image
       src={project.image}
       alt={project.title}
       fill
       sizes="100vw"
       className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
     />

    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub repository"
          onClick={handleExternalClick}
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/20 bg-black/40 backdrop-blur-md hover:border-[#D4AF37] hover:bg-black/60 transition-all duration-300"
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
          className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/20 bg-black/40 backdrop-blur-md hover:border-[#D4AF37] hover:bg-black/60 transition-all duration-300"
        >
          <span className="text-white text-xs">Fi</span>
        </a>
      )}
    </div>

    <div className="absolute bottom-0 left-0 right-0 z-10 p-5 pointer-events-none">
      <p className="mb-1 text-xs text-[#D4AF37]">
        {project.category}
      </p>

      <h3 className="text-xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-2 text-xs text-white/60">
        Tap to view details ↗
      </p>
    </div>
  </div>

  <div className="p-5">
    <div className="mb-6">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-[#D4AF37]">
        Overview
      </p>

      <p className="text-sm leading-6 text-white/65">
        {project.overview}
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-5">
      <div>
        <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
          Client
        </p>
        <p className="text-sm text-white/80">
          {project.info.client}
        </p>
      </div>

      <div>
        <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
          Duration
        </p>
        <p className="text-sm text-white/80">
          {project.info.duration}
        </p>
      </div>

      <div>
        <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-white/40">
          Role
        </p>
        <p className="text-sm text-white/80">
          {project.info.role}
        </p>
      </div>
    </div>

    {project.technologies.length > 0 && (
      <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
        {project.technologies.map((technology, index) => (
          <span
            key={`${technology}-${index}`}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
          >
            {technology}
          </span>
        ))}
      </div>
    )}
  </div>
</article>

);
}
