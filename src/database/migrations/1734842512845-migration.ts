import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1734842512845 implements MigrationInterface {
  name = 'Migration1734842512845';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "menu-items" ("id" SERIAL NOT NULL, "rest_id" integer NOT NULL, "item_name" character varying(100) NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_9c391305eb7917d1f0541abf53b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "restaurants" DROP COLUMN "description"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "restaurants" ADD "description" text`);
    await queryRunner.query(`DROP TABLE "menu-items"`);
  }
}
