-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "userid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "productname" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("productid")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
