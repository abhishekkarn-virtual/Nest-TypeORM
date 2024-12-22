import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('menu-items') // Table name
export class MenuItems {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  rest_id: number;

  @Column({ type: 'varchar', length: 100 })
  item_name: string;

  @Column({ type: 'int' })
  price: number;
}
