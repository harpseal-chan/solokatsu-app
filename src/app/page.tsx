import { SearchFilter } from "@/components/soloKatsu/SearchFilter";
import SoloKatsuCard from "@/components/soloKatsu/SoloKatsuCard";
import { getSoloKatsuList } from "@/lib/soloKatsu";
import { Budget, Category, Difficulty, SoloKatsu } from "@prisma/client";

export interface SearchParams {
  category?: Category;
  difficulty?: Difficulty;
  budget?: Budget;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  const soloKatsuList = (await getSoloKatsuList(
    resolvedSearchParams,
  )) as SoloKatsu[];
  const count = soloKatsuList.length;

  return (
    <>
      <section className="px-6 py-12 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-sk-text font-bold text-sk-headline tracking-tight mb-4">
          今日はどこで、なにする？
        </h1>
        <p className="text-sm md:text-base text-sk-muted leading-relaxed">
          「そろなび」は、おひとりさまの時間をちょっと贅沢に、
          <br />
          自由に楽しむためのソロ活紹介アプリです。
        </p>
      </section>
      <SearchFilter />
      {count === 0 ? (
        <div className="text-center py-16">
          <p className="text-sm font-semibold text-sk-text mb-2">
            該当するソロ活が見つかりませんでした
          </p>
          <p className="text-xs text-sk-muted">
            条件を少しゆるめて探してみてください
          </p>
        </div>
      ) : (
        <section className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4 px-1">
            <p className="text-sm text-sk-muted font-medium">
              該当するソロ活:{" "}
              <span className="text-base font-bold text-sk-text">{count}</span>{" "}
              件
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soloKatsuList.map((soloKatsu) => (
              <SoloKatsuCard key={soloKatsu.id} soloKatsu={soloKatsu} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
