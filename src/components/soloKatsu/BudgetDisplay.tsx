import { formatBudget } from "@/utils/soloKatsu";
import { Budget } from "@prisma/client";

export function BudgetDisplay({ budget }: { budget: Budget }) {
  return (
    <div className="text-xs font-semibold flex items-center justify-between pt-1 mb-2">
      <div className="flex items-center gap-1">
        <span className="text-sk-text/50 font-medium">予算:</span>
        <span className="text-sk-muted tracking-wide">
          {formatBudget(budget)}
        </span>
      </div>
    </div>
  );
}
