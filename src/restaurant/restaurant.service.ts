import { Injectable } from '@nestjs/common';
import { ApiBadRequestResponse } from '@nestjs/swagger/dist';
import { RestaurantDto } from 'src/dto/Request/restaurant.dto';
import { MenuItemRepository } from 'src/repositories/MenuItems.repository';
import { RestaurantRepository } from 'src/repositories/Restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(
    private readonly restaurantRepository: RestaurantRepository,
    private readonly menuRepository: MenuItemRepository,
  ) {}

  async createRestaurant(req: RestaurantDto) {
    try {
      const rest = this.restaurantRepository.create(req);
      await this.restaurantRepository.save(rest);
      return {
        status: 200,
        message: 'Restaurant added successfully',
      };
    } catch (err) {
      throw ApiBadRequestResponse(err);
    }
  }

  async findRestaurant(id: string) {
    try {
      return this.restaurantRepository.find({ where: { id: Number(id) } });
    } catch (err) {
      console.log(err);
    }
  }

  async findWithItems(id: string) {
    try {
      const Restuarant = await this.restaurantRepository.find({
        where: { id: Number(id) },
      });
      const Menus = await this.menuRepository.find({
        where: { rest_id: Number(id) },
      });

      return {
        status: 200,
        data: {
          restaurant: Restuarant,
          menu: Menus,
        },
      };
    } catch (err) {
      console.log(err);
    }
  }
}
