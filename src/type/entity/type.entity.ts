import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tab_Type {
  @Column()
  item_id: number;

  @PrimaryGeneratedColumn()
  type_id: number;

  @Column()
  type_name: number;

  @Column()
  upd_datetime: Date;
}
