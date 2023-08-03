import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Review } from './review.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
