/*
  Warnings:

  - You are about to drop the column `Role` on the `WageDocUser` table. All the data in the column will be lost.
  - Added the required column `role` to the `WageDocUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WageDocUser" DROP COLUMN "Role",
ADD COLUMN     "role" "Role" NOT NULL;
