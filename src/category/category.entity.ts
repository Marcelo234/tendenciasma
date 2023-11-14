import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: '50' })
  name: string;

  @Column({ name: 'description', type: 'varchar', length: '100' })
  description: string;

  @Column({ name: 'subcategory', type: 'varchar', length: '50' })
  subcategory: string;

  @Column({ name: 'state', type: 'boolean' })
  state: boolean;
}