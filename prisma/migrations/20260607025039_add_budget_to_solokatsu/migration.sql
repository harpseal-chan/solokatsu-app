/*
  Warnings:

  - Added the required column `budget` to the `SoloKatsu` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SoloKatsu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_SoloKatsu" ("category", "createdAt", "description", "difficulty", "id", "title", "updatedAt") SELECT "category", "createdAt", "description", "difficulty", "id", "title", "updatedAt" FROM "SoloKatsu";
DROP TABLE "SoloKatsu";
ALTER TABLE "new_SoloKatsu" RENAME TO "SoloKatsu";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
