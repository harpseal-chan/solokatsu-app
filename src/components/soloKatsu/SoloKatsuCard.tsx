import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SoloKatsu } from "@prisma/client";
import CategoryBadge from "@/components/soloKatsu/CategoryBadge";
import { DifficultyStars } from "@/components/soloKatsu/DifficultyStars";
import { BudgetDisplay } from "./BudgetDisplay";

export default function SoloKatsuCard({ soloKatsu }: { soloKatsu: SoloKatsu }) {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-sk-bg">
      <CardHeader className="flex flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          {/* カテゴリー */}
          <CategoryBadge category={soloKatsu.category} />
          {/* 難易度 */}
          <DifficultyStars difficulty={soloKatsu.difficulty} />
        </div>
        {/* タイトル */}
        <CardTitle className="text-lg font-bold text-sk-text">
          {soloKatsu.title}
        </CardTitle>
        {/*　予算インジケーター */}
        <BudgetDisplay budget={soloKatsu.budget} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-sk-muted line-clamp-2">
          {soloKatsu.description}
        </p>
      </CardContent>
    </Card>
  );
}
