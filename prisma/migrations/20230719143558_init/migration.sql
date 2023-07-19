-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'COMPANYOWNER', 'EMPLOYEE');

-- CreateTable
CREATE TABLE "WageDocUser" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "socialInsuranceNumber" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "Role" "Role" NOT NULL,

    CONSTRAINT "WageDocUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WageDocUser_email_key" ON "WageDocUser"("email");
