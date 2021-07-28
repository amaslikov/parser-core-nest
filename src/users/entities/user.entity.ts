import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @Column()
  email: string;

  @Column({ default: true })
  is_active: boolean;
}
