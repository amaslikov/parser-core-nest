import { MigrationInterface, QueryRunner } from 'typeorm';

export class musicsAddDates1627626281993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      ALTER TABLE musics
      ADD COLUMN created_at timestamp(0) without time zone NOT NULL,
      ADD COLUMN updated_at timestamp(0) without time zone NOT NULL;
    `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
