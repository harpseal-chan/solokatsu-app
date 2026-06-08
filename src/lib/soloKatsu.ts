import { prisma } from "@/lib/prisma";

export async function getSoloKatsuList() {
  try {
    const soloKatsuList = await prisma.soloKatsu.findMany({
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
  } catch (error) {
    console.error("Error fetching soloKatsu list:", error);
    return [];
  }
}
