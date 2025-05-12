/*
  Warnings:

  - Added the required column `cliendId` to the `app_updates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "app_updates" ADD COLUMN     "cliendId" TEXT NOT NULL;
