"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { RotateCcw } from "lucide-react";
import {
  BUDGET_ITEMS,
  CATEGORY_ITEMS,
  DIFFICULTY_ITEMS,
} from "@/utils/soloKatsu";

export function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 現在のURLから選択中の値を取得（なければ空文字）
  const currentCategory = searchParams.get("category") || undefined;
  const currentDifficulty = searchParams.get("difficulty") || undefined;
  const currentBudget = searchParams.get("budget") || undefined;
  const hasActiveFilters =
    currentCategory !== undefined ||
    currentDifficulty !== undefined ||
    currentBudget !== undefined;

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === undefined) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/?${params.toString()}`);
  };

  const handleResetFilters = () => {
    router.push("/");
  };

  const renderCategoryItems = () => {
    return CATEGORY_ITEMS.map((item) => (
      <SelectItem key={item.category} value={item.category}>
        <div className="flex items-center justify-center gap-0.5 sm:gap-2">
          <span className="font-semibold text-sk-text">{item.label}</span>
          <span className="text-[11px] sm:text-xs text-sk-text/40 font-normal">
            （{item.desc}）
          </span>
        </div>
      </SelectItem>
    ));
  };

  const renderBudgetItems = () => {
    return BUDGET_ITEMS.map((item) => (
      <SelectItem key={item.budget} value={item.budget}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
          <span className="font-semibold text-sk-text">{item.desc}</span>
        </div>
      </SelectItem>
    ));
  };

  const renderDifficultyItems = () => {
    return DIFFICULTY_ITEMS.map((item) => (
      <SelectItem key={item.difficulty} value={item.difficulty}>
        <div className="flex items-center justify-center gap-0.5 sm:gap-2">
          <span className="font-semibold text-sk-text">{item.label}</span>
          <span className="text-[11px] sm:text-xs text-sk-text/40 font-normal">
            （{item.desc}）
          </span>
        </div>
      </SelectItem>
    ));
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4">
      <div className="flex items-center mb-3 px-1 gap-2">
        <h2 className="text-sm font-bold text-sk-text flex items-center gap-2">
          条件で探す
        </h2>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1.5 text-xs font-semibold text-sk-text/50 hover:text-sk-primary transition-colors duration-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            条件をクリア
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-sk-bg backdrop-blur-md p-4 rounded-xl border border-sk-text/10 shadow-sm">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-sk-text pl-1">
            カテゴリー
          </label>
          <Select
            key={currentCategory}
            value={currentCategory}
            onValueChange={(val) => handleFilterChange("category", val)}
          >
            <SelectTrigger className="w-full bg-sk-bg text-sk-text border-sk-text/20">
              <SelectValue placeholder="カテゴリー" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>{renderCategoryItems()}</SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-sk-text pl-1">難易度</label>
          <Select
            key={currentDifficulty}
            value={currentDifficulty}
            onValueChange={(val) => handleFilterChange("difficulty", val)}
          >
            <SelectTrigger className="w-full bg-sk-bg text-sk-text border-sk-text/20">
              <SelectValue placeholder="難易度" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>{renderDifficultyItems()}</SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-sk-text pl-1">予算</label>
          <Select
            key={currentBudget}
            value={currentBudget}
            onValueChange={(val) => handleFilterChange("budget", val)}
          >
            <SelectTrigger className="w-full bg-sk-bg text-sk-text border-sk-text/20">
              <SelectValue placeholder="予算" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>{renderBudgetItems()}</SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
