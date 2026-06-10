import { Budget, Category, Difficulty } from "@prisma/client";

/**
 * カテゴリーのラベル/説明リスト
 */
export const CATEGORY_ITEMS = [
  { category: Category.GOURMET, label: "グルメ", desc: "グルメを堪能する" },
  {
    category: Category.CULTURE,
    label: "カルチャー",
    desc: "知的好奇心を満たす",
  },
  { category: Category.REFRESH, label: "リフレッシュ", desc: "心と体を整える" },
  { category: Category.INDOOR, label: "インドア", desc: "おうち時間を極める" },
  {
    category: Category.ENTERTAINMENT,
    label: "エンタメ",
    desc: "非日常を楽しむ",
  },
] as const;

/**
 * カテゴリーの短いラベルを取得する（例: "GOURMET" -> "グルメ"）
 */
export function formatCategory(category: Category): string {
  return CATEGORY_ITEMS.find((c) => c.category === category)?.label || category;
}

/**
 * 予算の説明リスト
 */
export const BUDGET_ITEMS = [
  { budget: Budget.FREE, desc: "無料" },
  { budget: Budget.LIGHT, desc: "~2,000円" },
  { budget: Budget.STANDARD, desc: "~8,000円" },
  { budget: Budget.LUXURY, desc: "8,000円~" },
] as const;

/**
 * 予算Enumを説明文に変換
 */
export function formatBudget(budget: Budget): string {
  return BUDGET_ITEMS.find((c) => c.budget === budget)?.desc || budget;
}

/**
 * 難易度のラベル/説明リスト
 */
export const DIFFICULTY_ITEMS = [
  { difficulty: Difficulty.EASY, label: "★☆☆", desc: "初心者向け" },
  { difficulty: Difficulty.NORMAL, label: "★★☆", desc: "ちょっと勇気" },
  { difficulty: Difficulty.HARD, label: "★★★", desc: "玄人向け" },
] as const;
