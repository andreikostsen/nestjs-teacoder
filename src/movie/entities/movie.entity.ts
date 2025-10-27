import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releaseYear: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
