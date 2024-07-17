import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Questionnaire {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  title: string

  @Column()
  content: string

  @Column()
  is_published: boolean

  @Column()
  is_tar: boolean

  @Column()
  answer_count: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}