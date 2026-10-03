import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

import NatureVersePage from "../designs/NatureVersePage";
import ProjectComing from "../designs/ProjectComing";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    notFound();
  }

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    notFound();
  }

  let ProjectDesign;

  switch (project.id) {
    case 1:
      ProjectDesign = NatureVersePage;
      break;
    case 2:
      ProjectDesign = ProjectComing;
      break;

    default:
      notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0B0F] text-white">
      <Navbar />
      <ProjectDesign project={project} />
    </main>
  );
}