import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tab_Item {
  @PrimaryGeneratedColumn()
  item_id: number;

  @Column({ length: 210 })
  item_name: string;

  @Column()
  item_status: number;

  @Column()
  upd_datetime: Date;
}
