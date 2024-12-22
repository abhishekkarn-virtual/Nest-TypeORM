import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1734788623589 implements MigrationInterface {
  name = 'Migration1734788623589';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "restaurants" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, "address" character varying(255) NOT NULL, "phone" character varying(20), "averagePrice" numeric(10,2), "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "restaurants"`);
  }
}
