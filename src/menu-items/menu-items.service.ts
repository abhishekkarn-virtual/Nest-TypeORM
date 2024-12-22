import { Injectable } from '@nestjs/common';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { MenuItemsDTO } from 'src/dto/Request/menu-items.dto';
import { MenuItemRepository } from 'src/repositories/MenuItems.repository';
import { RestaurantRepository } from 'src/repositories/Restaurant.repository';

@Injectable()
export class MenuItemsService {
  constructor(
    private readonly menuRepository: MenuItemRepository,
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  async addMenu(req: MenuItemsDTO) {
    try {
      const menu = await this.menuRepository.create(req);
      await this.menuRepository.save(menu);

      //update avg price of restaurant after adding menu item
      const allMenus = await this.menuRepository.find({
        where: { rest_id: req.rest_id },
      });
      const TotalPrice = allMenus.reduce(
        (acc: number, menus: MenuItemsDTO) => menus.price + acc,
        0,
      );
      const avgPrice = TotalPrice / allMenus.length;
      await this.restaurantRepository.update(
        { id: req.rest_id },
        { averagePrice: avgPrice },
      );
      return {
        status: 200,
        message: 'Menu added successfully',
      };
    } catch (err) {
      throw ApiBadRequestResponse(err);
    }
  }
}
