import { Difficulty } from "@prisma/client";
import { Star } from "lucide-react";

/**
 * 難易度Enumを星の数（数値）にマッピングするオブジェクト
 */
const DIFFICULTY_MAP: Record<Difficulty, number> = {
  EASY: 1,
  NORMAL: 2,
  HARD: 3,
};

export function DifficultyStars({ difficulty }: { difficulty: Difficulty }) {
  const starCount = DIFFICULTY_MAP[difficulty];

  return (
    <div className="text-xs font-semibold flex items-center justify-between pt-1">
      <div className="flex items-center gap-1">
        <span className="text-sk-text/50 font-medium">難易度:</span>
        {/* 常に3つの星をループさせ、starCountの数だけ色を塗る */}
        {[...Array(3)].map((_, index) => (
          <Star
            key={index}
            className={`w-3.5 h-3.5 ${
              index < starCount
                ? "fill-sk-primary text-sk-primary"
                : "text-sk-muted/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
