import { Injectable } from '@nestjs/common';
import { MenuItems } from 'src/entity/menu-items.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class MenuItemRepository extends Repository<MenuItems> {
  constructor(private readonly dataSource: DataSource) {
    super(MenuItems, dataSource.createEntityManager());
  }
}
