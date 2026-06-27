import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany();

    return Response.json({
      success: true,
      data: projects,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    });
  }
}