import { MigrationInterface, QueryRunner } from 'typeorm';

export class parseCars1627569988778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE SEQUENCE public.parse_cars_id_seq
        START WITH 1
        INCREMENT BY 1
        NO MINVALUE
        NO MAXVALUE
        CACHE 1;
      CREATE TABLE public.parse_cars (
        id integer NOT NULL DEFAULT nextval('"parse_cars_id_seq"'::regclass),
        site_id integer NOT NULL,
        url text NOT NULL,
        price integer NOT NULL,
        year integer NOT NULL,
        name character varying(254) NOT NULL,
        created_at timestamp(0) without time zone NOT NULL,
        updated_at timestamp(0) without time zone NOT NULL
      );
      ALTER TABLE ONLY public.parse_cars
        ADD CONSTRAINT parse_cars_pkey PRIMARY KEY (id);
    `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
