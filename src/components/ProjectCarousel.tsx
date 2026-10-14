import ProjectCardDesk from "@/components/ProjectCardDesk";
import ProjectCardMbl from "@/components/ProjectCardMbl";
import type { Project } from "@/data/projects";
import Button from "@/components/ui/Button";

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
      <div className="mb-24 hidden justify-center lg:flex">
        <div className="flex w-full max-w-7xl items-start gap-1 xl:gap-1">
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
      <div className="mb-16 lg:hidden">
        <div className="grid grid-cols-2 items-start gap-x-0.5 gap-y-0.5 sm:gap-x-3 sm:gap-y-4">
          {visibleProjects.map((project) => (
            <ProjectCardMbl
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="mt-10 w-full">
          <div className="w-full [&>a]:flex [&>a]:w-full [&>a]:justify-center [&>a]:text-center [&>button]:flex [&>button]:w-full [&>button]:justify-center [&>button]:text-center">
            <Button
              text="See More Projects"
              variant="gold"
              iconPosition="right"
              normalIcon="/icons/right.svg"
              pressedIcon="/icons/right.svg"
              href="/projects"
            />
          </div>
        </div>
      </div>
    </div>
  );
}