-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "images" TEXT[],
    "sizes" TEXT[],
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GSMVariant" (
    "id" SERIAL NOT NULL,
    "gsm" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "GSMVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorVariant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "soldOut" BOOLEAN NOT NULL DEFAULT false,
    "variantId" INTEGER NOT NULL,

    CONSTRAINT "ColorVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactMessage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GSMVariant" ADD CONSTRAINT "GSMVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorVariant" ADD CONSTRAINT "ColorVariant_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "GSMVariant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
