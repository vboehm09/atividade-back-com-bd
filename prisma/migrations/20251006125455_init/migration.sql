-- CreateTable
CREATE TABLE "pets" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "dono" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);
