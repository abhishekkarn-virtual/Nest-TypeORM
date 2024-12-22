import { Injectable } from '@nestjs/common';
import { RestaurantDto } from 'src/dto/Request/restaurant.dto';
import { RestaurantRepository } from 'src/repositories/Restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async createRestaurant(req: RestaurantDto) {
    try {
      const rest = this.restaurantRepository.create(req);
      return this.restaurantRepository.save(rest);
    } catch (err) {
      console.log(err);
    }
  }

  async findRestaurant(id: string) {
    try {
      return this.restaurantRepository.find({ where: { id: Number(id) } });
    } catch (err) {
      console.log(err);
    }
  }
}
