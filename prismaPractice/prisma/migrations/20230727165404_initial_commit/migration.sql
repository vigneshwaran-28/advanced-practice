/*
  Warnings:

  - Changed the type of `name` on the `product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "name",
ADD COLUMN     "name" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");
