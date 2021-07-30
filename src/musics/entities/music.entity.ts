import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'musics' })
export class Music {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: number;

  @Column()
  path: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
