import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

const CATEGORY_MAP: Record<Category, string> = {
  GOURMET: "グルメ",
  CULTURE: "カルチャー",
  REFRESH: "リフレッシュ",
  INDOOR: "インドア",
  ENTERTAINMENT: "エンターテイメント",
};

/**
 * カテゴリEnumを分かりやすい日本語に変換する関数
 */
export function formatCategory(category: Category): string {
  return CATEGORY_MAP[category] || category;
}

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <Badge className="bg-sk-secondary text-sk-text font-semibold border-none rounded-md px-2 py-0.5 text-xs hover:bg-sk-secondary">
      {formatCategory(category)}
    </Badge>
  );
}
