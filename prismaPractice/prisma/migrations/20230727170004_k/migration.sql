/*
  Warnings:

  - The `name` column on the `product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "name",
ADD COLUMN     "name" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "product_name_key" ON "product"("name");
