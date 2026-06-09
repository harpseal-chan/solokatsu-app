import { Budget } from "@prisma/client";

/**
 * 予算Enumごとの設定（日本語ラベル ＆ 円マークの点灯数）
 */
const BUDGET_CONFIG: Record<Budget, { label: string; yenCount: number }> = {
  FREE: { label: "無料", yenCount: 0 },
  LIGHT: { label: "〜2,000円", yenCount: 1 },
  STANDARD: { label: "〜8,000円", yenCount: 2 },
  LUXURY: { label: "8,000円以上", yenCount: 3 },
};

export function BudgetDisplay({ budget }: { budget: Budget }) {
  const config = BUDGET_CONFIG[budget];
  if (!config) return null;

  return (
    <div className="text-xs font-semibold flex items-center justify-between pt-1">
      <div className="flex items-center gap-1">
        <span className="text-sk-text/50 font-medium">予算:</span>
        <span className="text-sk-muted tracking-wide">{config.label}</span>
      </div>
    </div>
  );
}
