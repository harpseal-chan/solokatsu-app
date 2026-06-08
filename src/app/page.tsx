import SoloKatsuCard from "@/components/soloKatsu/SoloKatsuCard";
import { getSoloKatsuList } from "@/lib/soloKatsu";
import { SoloKatsu } from "@prisma/client";

export default async function Home() {
  const soloKatsuList = (await getSoloKatsuList()) as SoloKatsu[];
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
      <section className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soloKatsuList.map((soloKatsu) => (
            <SoloKatsuCard key={soloKatsu.id} soloKatsu={soloKatsu} />
          ))}
        </div>
      </section>
    </>
  );
}
