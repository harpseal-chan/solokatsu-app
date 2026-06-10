import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { formatCategory } from "@/utils/soloKatsu";

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <Badge className="bg-sk-secondary text-sk-text font-semibold border-none rounded-md px-2 py-0.5 text-xs hover:bg-sk-secondary">
      {formatCategory(category)}
    </Badge>
  );
}
