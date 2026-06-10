import CategoryBadge from "@/components/soloKatsu/CategoryBadge";
import { DifficultyStars } from "@/components/soloKatsu/DifficultyStars";
import { getSoloKatsuDetail } from "@/lib/soloKatsu";
import { formatBudget } from "@/utils/soloKatsu";
import { SoloKatsu } from "@prisma/client";
import { ArrowLeft, Flame, Wallet } from "lucide-react";
import Link from "next/link";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function SoloKatsuDetailPage({ params }: Params) {
  const { id } = await params;
  const soloKatsu = (await getSoloKatsuDetail(id)) as SoloKatsu;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-sk-text">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex item-center gap-2 text-sm font-semibold text-sk-text/50 hover:text-sk-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          ソロ活一覧へ戻る
        </Link>
      </div>

      <article className="bg-white border border-sk-stroke/10 rounded-3xl p-6 sm:p-8 shadow-sm">
        {/* カテゴリー */}
        <div className="mb-4">
          <CategoryBadge category={soloKatsu.category} size="lg" />
        </div>

        {/* タイトル */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6 leading-tight text-sk-text">
          {soloKatsu.title}
        </h1>

        {/* スペックダッシュボード（難易度 & 予算） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-sk-bg/30 mb-8">
          <div className="flex flex-col items-center justify-start p-3 bg-sk-bg border border-sk-text/5 rounded-xl shadow-sm text-center">
            <span className="text-sm font-semibold text-sk-text/40 flex items-center gap-1 mb-1.5">
              <Flame className="w-3.5 h-3.5 text-sk-primary" />
              難易度
            </span>
            <div className="flex items-center h-6">
              <DifficultyStars difficulty={soloKatsu.difficulty} size="md" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-start p-3 bg-sk-bg border border-sk-text/5 rounded-xl shadow-sm text-center">
            <span className="text-sm font-semibold text-sk-text/40 flex items-center gap-1 mb-1.5">
              <Wallet className="w-3.5 h-3.5 text-sk-primary" />
              予算
            </span>
            <span className="text-base font-bold leading-6">
              {formatBudget(soloKatsu.budget)}
            </span>
          </div>
        </div>

        <div className="prose prose-sk max-w-none">
          <h2 className="text-lg font-bold mb-3 border-b border-sk-text/10 pb-2 flex item-center gap-2">
            ✨ このソロ活の楽しみ方
          </h2>
          <p className="text-base leading-relaxed text-sk-muted whitespace-pre-wrap">
            {soloKatsu.description}
          </p>
        </div>
      </article>
    </div>
  );
}
