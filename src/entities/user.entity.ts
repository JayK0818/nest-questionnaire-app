// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({
    unique: true,
    length: 20,
    type: 'varchar'
  })
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date
}
