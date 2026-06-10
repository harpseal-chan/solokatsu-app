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

const SIZE_MAP = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
} as const;

type DifficultyStarsProps = {
  difficulty: Difficulty;
  size?: keyof typeof SIZE_MAP;
};

export function DifficultyStars({
  difficulty,
  size = "sm",
}: DifficultyStarsProps) {
  const starCount = DIFFICULTY_MAP[difficulty];
  const sizeClass = SIZE_MAP[size];

  return (
    <div className="flex items-center justify-center gap-1">
      {[...Array(3)].map((_, index) => (
        <Star
          key={index}
          className={`${sizeClass} ${
            index < starCount
              ? "fill-sk-primary text-sk-primary"
              : "text-sk-muted/20"
          }`}
        />
      ))}
    </div>
  );
}
