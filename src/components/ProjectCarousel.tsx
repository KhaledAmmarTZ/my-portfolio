import ProjectCardDesk from "@/components/ProjectCardDesk";
import ProjectCardMbl from "@/components/ProjectCardMbl";
import type { Project } from "@/data/projects";

type Props = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: Props) {
  const visibleProjects = projects.slice(0, 6);

  if (visibleProjects.length === 0) {
    return null;
  }

  const cardPositions = [
    "mt-21",
    "mt-46.5",
    "mt-px",
    "mt-16.5",
    "mt-28.75",
    "mt-0",
  ];

  return (
    <div className="w-full">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:flex justify-center mb-24">
        <div className="flex items-start gap-2 xl:gap-5 w-full max-w-7xl">
          {visibleProjects.map((project, index) => (
            <ProjectCardDesk
              key={project.id}
              project={project}
              marginTop={cardPositions[index] ?? "mt-0"}
            />
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden mb-24">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 md:gap-10 md:px-6">
          {visibleProjects.map((project) => (
            <ProjectCardMbl
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>

    </div>
  );
}