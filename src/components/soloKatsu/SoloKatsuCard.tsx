import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SoloKatsu } from "@prisma/client";
import CategoryBadge from "@/components/soloKatsu/CategoryBadge";
import { DifficultyStars } from "@/components/soloKatsu/DifficultyStars";
import { BudgetDisplay } from "./BudgetDisplay";
import Link from "next/link";

export default function SoloKatsuCard({ soloKatsu }: { soloKatsu: SoloKatsu }) {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-sk-bg">
      <Link href={`/solo-katsu/${soloKatsu.id}`}>
        <CardHeader className="flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            {/* カテゴリー */}
            <CategoryBadge category={soloKatsu.category} />
            {/* 難易度 */}
            <div className="text-xs font-semibold flex items-center justify-between pt-1">
              <div className="flex items-center gap-1">
                <span className="text-sk-text/50 font-medium">難易度:</span>
                <DifficultyStars difficulty={soloKatsu.difficulty} size="sm" />
              </div>
            </div>
          </div>
          {/* タイトル */}
          <CardTitle className="text-lg font-bold text-sk-text">
            {soloKatsu.title}
          </CardTitle>
          {/*　予算 */}
          <BudgetDisplay budget={soloKatsu.budget} />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-sk-muted line-clamp-2">
            {soloKatsu.description}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
