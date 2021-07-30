import { MigrationInterface, QueryRunner } from 'typeorm';

export class musics1627623963567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE SEQUENCE public.musics_id_seq
        START WITH 1
        INCREMENT BY 1
        NO MINVALUE
        NO MAXVALUE
        CACHE 1;
      CREATE TABLE public.musics (
          id integer NOT NULL DEFAULT nextval('"musics_id_seq"'::regclass),
          name character varying(255) NOT NULL,
          position integer NOT NULL,
          path character varying(255) NOT NULL
      );
      ALTER TABLE ONLY public.musics
        ADD CONSTRAINT musics_pkey PRIMARY KEY (id);
    `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
