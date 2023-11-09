-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_categoryId_fkey";

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "price" DROP DEFAULT,
ALTER COLUMN "price" SET DATA TYPE TEXT;
