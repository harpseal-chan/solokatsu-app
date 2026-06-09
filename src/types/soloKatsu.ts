import { Budget, Category, Difficulty } from "@prisma/client";

export type SoloKatsu = {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  budget: Budget;
};

export type SoloKatsuCardProps = {
  soloKatsu: SoloKatsu;
};
