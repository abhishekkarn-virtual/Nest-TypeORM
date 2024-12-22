import { Module } from '@nestjs/common';
import { MenuItemsController } from './menu-items.controller';
import { MenuItemsService } from './menu-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItems } from 'src/entity/menu-items.entity';
import { MenuItemRepository } from 'src/repositories/MenuItems.repository';
import { Restaurant } from 'src/entity/restaurant.entity';
import { RestaurantRepository } from 'src/repositories/Restaurant.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItems, Restaurant])],
  controllers: [MenuItemsController],
  providers: [MenuItemsService, MenuItemRepository, RestaurantRepository],
  exports: [MenuItemRepository],
})
export class MenuItemsModule {}
