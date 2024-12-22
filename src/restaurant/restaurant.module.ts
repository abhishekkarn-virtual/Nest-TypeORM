import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from 'src/entity/restaurant.entity';
import { RestaurantRepository } from 'src/repositories/Restaurant.repository';
import { MenuItems } from 'src/entity/menu-items.entity';
import { MenuItemRepository } from 'src/repositories/MenuItems.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, MenuItems])],
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantRepository, MenuItemRepository],
  exports: [RestaurantRepository],
})
export class RestaurantModule {}
