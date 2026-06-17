import ReactMarkdown from "react-markdown";
import CategoryBadge from "@/components/soloKatsu/CategoryBadge";
import { DifficultyStars } from "@/components/soloKatsu/DifficultyStars";
import { getSoloKatsuDetail } from "@/lib/soloKatsu";
import { formatBudget } from "@/utils/soloKatsu";
import { SoloKatsu } from "@prisma/client";
import { ArrowLeft, Flame, Lightbulb, NotebookPen, Wallet } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const soloKatsu = (await getSoloKatsuDetail(id)) as SoloKatsu;
  if (!soloKatsu) {
    return { title: "ページが見つかりません" };
  }

  return {
    title: soloKatsu.title,
  };
}

export default async function SoloKatsuDetailPage({ params }: Params) {
  const { id } = await params;
  const soloKatsu = (await getSoloKatsuDetail(id)) as SoloKatsu;
  if (!soloKatsu) {
    notFound();
  }

  const markdownClass =
    "space-y-2 text-sm leading-relaxed text-[var(--color-sk-muted)] [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>strong]:font-bold [&>strong]:text-[var(--color-sk-text)] [&>p]:mb-2 [&>h4]:font-bold [&>h4]:text-base [&>h4]:text-[var(--color-sk-text)] [&>h4]:mt-3";

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

      <article className="bg-sk-bg border border-sk-text/10 rounded-3xl shadow-sm">
        {/* 画像 */}
        {soloKatsu.imageUrl ? (
          <div className="relative w-full h-56 lg:h-80">
            <Image
              src={soloKatsu.imageUrl}
              alt={soloKatsu.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="rounded-t-3xl object-cover"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-56 lg:h-80 rounded-t-3xl bg-linear-to-br from-sk-secondary to-sk-bg flex items-center justify-center"></div>
        )}

        <div className="pb-6 px-6 sm:pb-8 sm:px-8 mt-6">
          {/* カテゴリー */}
          <div className="mb-4">
            <CategoryBadge category={soloKatsu.category} size="lg" />
          </div>

          {/* タイトル */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 leading-tight text-sk-text">
              {soloKatsu.title}
            </h1>
            {/* 説明文 */}
            <p className="text-base leading-relaxed text-sk-muted whitespace-pre-wrap">
              {soloKatsu.description}
            </p>
          </div>

          {/* スペックダッシュボード（難易度 & 予算） */}
          <div className="grid grid-cols-2 gap-4 bg-sk-bg/30 mb-8">
            <div className="flex flex-col items-center justify-start p-3 bg-sk-bg border border-sk-text/10 rounded-xl shadow-sm text-center">
              <span className="text-sm font-semibold text-sk-text/40 flex items-center gap-1 mb-1.5">
                <Flame className="w-3.5 h-3.5 text-sk-text/40" />
                難易度
              </span>
              <div className="flex items-center h-6">
                <DifficultyStars difficulty={soloKatsu.difficulty} size="md" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-start p-3 bg-sk-bg border border-sk-text/5 rounded-xl shadow-sm text-center">
              <span className="text-sm font-semibold text-sk-text/40 flex items-center gap-1 mb-1.5">
                <Wallet className="w-3.5 h-3.5 text-sk-text/40" />
                予算
              </span>
              <span className="text-base font-bold leading-6">
                {formatBudget(soloKatsu.budget)}
              </span>
            </div>
          </div>

          {/* 感想 */}
          {soloKatsu.impressions && (
            <div className="bg-sk-tertiary/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-1 mb-3">
                <NotebookPen className="w-4 h-4 text-sk-text" />
                <h3 className="text-lg font-bold text-sk-text">
                  ソロ活のきろく
                </h3>
              </div>
              <div className={markdownClass}>
                <ReactMarkdown>{soloKatsu.impressions}</ReactMarkdown>
              </div>
            </div>
          )}
          {/* Tips */}
          {soloKatsu.tips && (
            <div className="bg-sk-bg rounded-2xl p-6 border-2 border-dashed border-sk-primary relative overflow-hidden">
              <div className="flex items-center gap-1 mb-3">
                <Lightbulb className="w-4 h-4 text-sk-primary" />
                <h3 className="text-lg font-bold text-sk-text">Tips</h3>
              </div>
              <div className={markdownClass}>
                <ReactMarkdown>{soloKatsu.tips}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
