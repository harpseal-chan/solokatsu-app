import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { formatCategory } from "@/utils/soloKatsu";

const SIZE_MAP = {
  sm: "text-[11px] px-2 py-1 rounded",
  md: "text-xs px-3 py-1.5 rounded-md",
  lg: "text-sm px-4 py-2 rounded-lg",
} as const;

type CategoryBadgeProps = {
  category: Category;
  size?: keyof typeof SIZE_MAP;
};

export default function CategoryBadge({
  category,
  size = "md",
}: CategoryBadgeProps) {
  const sizeClass = SIZE_MAP[size];
  return (
    <Badge
      className={`bg-sk-secondary text-sk-text font-semibold border-none hover:bg-sk-secondary ${sizeClass}`}
    >
      {formatCategory(category)}
    </Badge>
  );
}
