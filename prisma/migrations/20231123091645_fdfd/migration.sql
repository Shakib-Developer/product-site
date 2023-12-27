/*
  Warnings:

  - You are about to drop the column `keyword` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `product` table. All the data in the column will be lost.
  - Added the required column `title` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `keyword`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    DROP COLUMN `type`,
    ADD COLUMN `title` VARCHAR(300) NOT NULL,
    MODIFY `des` VARCHAR(60000) NOT NULL;
