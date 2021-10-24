/*
  Warnings:

  - Added the required column `userId` to the `purchaseHistory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_purchaseHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "purchaseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "purchaseHistory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_purchaseHistory" ("categoryId", "id", "productId", "quantity") SELECT "categoryId", "id", "productId", "quantity" FROM "purchaseHistory";
DROP TABLE "purchaseHistory";
ALTER TABLE "new_purchaseHistory" RENAME TO "purchaseHistory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
