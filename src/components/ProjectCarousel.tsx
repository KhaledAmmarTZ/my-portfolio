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
        <div className="flex w-full flex-col gap-8">
          {visibleProjects.map((project) => (
            <ProjectCardMbl
              key={project.id}
              project={project}
            />
          ))}
        </div>
        {/* Button */}
        <div className=" mt-10 flex flex-col  w-full">
          <Button
            text="see more project"
            variant="gold"
            iconPosition="right"
            normalIcon="/icons/right.svg"
            pressedIcon="/icons/right.svg"
            fullWidth
          />
        </div>
      </div>

    </div>
  );
}