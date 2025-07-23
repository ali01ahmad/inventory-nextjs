/*
  Warnings:

  - You are about to drop the column `cost` on the `Shipment` table. All the data in the column will be lost.
  - You are about to drop the column `customsTax` on the `Shipment` table. All the data in the column will be lost.
  - You are about to drop the column `pictureURL` on the `Shipment` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `Shipment` table. All the data in the column will be lost.
  - Added the required column `name` to the `Shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Shipment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "shipmentId" INTEGER NOT NULL,
    CONSTRAINT "Item_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shipment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "shippedAt" DATETIME,
    "notes" TEXT
);
INSERT INTO "new_Shipment" ("id", "status") SELECT "id", "status" FROM "Shipment";
DROP TABLE "Shipment";
ALTER TABLE "new_Shipment" RENAME TO "Shipment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
