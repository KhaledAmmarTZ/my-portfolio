import { prisma } from "@/lib/prisma";

export async function GET() {
  const projects = await prisma.project.findMany({
    include: {
      images: true,
      reviews: true,
      challenges: true,
      solutions: true,
      colorPalette: true,
    },
  });

  return Response.json(projects);
}