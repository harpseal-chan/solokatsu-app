import { Budget } from "@prisma/client";

export const BUDGET_MAP: Record<Budget, string> = {
  FREE: "無料",
  LIGHT: "〜2,000円",
  STANDARD: "〜8,000円",
  LUXURY: "8,000円以上",
};

/**
 * 予算Enumを分かりやすい日本語に変換する関数
 */
export function formatBudget(budget: Budget): string {
  return BUDGET_MAP[budget] || budget;
}

export function BudgetDisplay({ budget }: { budget: Budget }) {
  return (
    <div className="text-xs font-semibold flex items-center justify-between pt-1">
      <div className="flex items-center gap-1">
        <span className="text-sk-text/50 font-medium">予算:</span>
        <span className="text-sk-muted tracking-wide">
          {formatBudget(budget)}
        </span>
      </div>
    </div>
  );
}
