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
import { formatCategory } from "./CategoryBadge";
import { Budget, Category } from "@prisma/client";
import { formatBudget } from "./BudgetDisplay";
import { RotateCcw } from "lucide-react";

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

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-sm font-bold text-sk-text/80 flex items-center gap-2">
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
            value={currentCategory}
            onValueChange={(val) => handleFilterChange("category", val)}
          >
            <SelectTrigger className="w-full bg-sk-bg text-sk-text border-sk-text/20">
              <SelectValue placeholder="カテゴリー" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="GOURMET">
                  {formatCategory(Category.GOURMET)}
                </SelectItem>
                <SelectItem value="CULTURE">
                  {formatCategory(Category.CULTURE)}
                </SelectItem>
                <SelectItem value="ENTERTAINMENT">
                  {formatCategory(Category.ENTERTAINMENT)}
                </SelectItem>
                <SelectItem value="REFRESH">
                  {formatCategory(Category.REFRESH)}
                </SelectItem>
                <SelectItem value="INDOOR">
                  {formatCategory(Category.INDOOR)}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-sk-text pl-1">難易度</label>
          <Select
            value={currentDifficulty}
            onValueChange={(val) => handleFilterChange("difficulty", val)}
          >
            <SelectTrigger className="w-full bg-sk-bg text-sk-text border-sk-text/20">
              <SelectValue placeholder="難易度" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="EASY">★☆☆（初心者向け）</SelectItem>
                <SelectItem value="NORMAL">★★☆（ちょっと勇気）</SelectItem>
                <SelectItem value="HARD">★★★（玄人向け）</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-sk-text pl-1">予算</label>
          <Select
            value={currentBudget}
            onValueChange={(val) => handleFilterChange("budget", val)}
          >
            <SelectTrigger className="w-full bg-sk-bg text-sk-text border-sk-text/20">
              <SelectValue placeholder="予算" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="FREE">
                  {formatBudget(Budget.FREE)}
                </SelectItem>
                <SelectItem value="LIGHT">
                  {formatBudget(Budget.LIGHT)}
                </SelectItem>
                <SelectItem value="STANDARD">
                  {formatBudget(Budget.STANDARD)}
                </SelectItem>
                <SelectItem value="LUXURY">
                  {formatBudget(Budget.LUXURY)}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
