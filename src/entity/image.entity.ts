import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Review } from './review.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  review_id: number;

  @Column()
  base64: string;

  @ManyToOne(() => Review)
  @JoinColumn({ name: 'review_id', referencedColumnName: 'id' })
  review: Review;
}
