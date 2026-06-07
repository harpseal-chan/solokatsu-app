import { PrismaClient, Category, Difficulty } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // クリーンアップ
  await prisma.soloKatsu.deleteMany();

  await prisma.soloKatsu.create({
    data: {
      title: "純喫茶巡り",
      description:
        "レトロな雰囲気の喫茶店で、静かに読書をしたり、名物のクリームソーダや硬めプリンを味わいます。おひとり様が多いので人目も気になりません。",
      category: Category.GOURMET,
      difficulty: Difficulty.EASY,
    },
  });

  console.log("Seed data created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
