import { MigrationInterface, QueryRunner } from 'typeorm';

export class users1627477139320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE SEQUENCE public.users_id_seq
        START WITH 1
        INCREMENT BY 1
        NO MINVALUE
        NO MAXVALUE
        CACHE 1;
      CREATE TABLE public.users (
          id integer NOT NULL DEFAULT nextval('"users_id_seq"'::regclass),
          username character varying(25) NOT NULL,
          password character varying(64) NOT NULL,
          email character varying(254) NOT NULL,
          is_active boolean NOT NULL
      );
      ALTER TABLE ONLY public.users
        ADD CONSTRAINT users_pkey PRIMARY KEY (id);
    `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
