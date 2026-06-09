import { prisma } from "@/lib/prisma";
import { SearchParams } from "@/app/page";
import { Prisma } from "@prisma/client";

export async function getSoloKatsuList(searchParams?: SearchParams) {
  const whereClause: Prisma.SoloKatsuWhereInput = {};

  if (searchParams?.category) {
    whereClause.category = searchParams.category;
  }
  if (searchParams?.difficulty) {
    whereClause.difficulty = searchParams.difficulty;
  }
  if (searchParams?.budget) {
    whereClause.budget = searchParams.budget;
  }

  try {
    const soloKatsuList = await prisma.soloKatsu.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        difficulty: true,
        budget: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return soloKatsuList;
  } catch {
    return [];
  }
}
