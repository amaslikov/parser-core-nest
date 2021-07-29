import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'parse_cars' })
export class ParseCar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  site_id: number;

  @Column()
  url: string;

  @Column()
  price: number;

  @Column()
  year: number;

  @Column()
  name: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
