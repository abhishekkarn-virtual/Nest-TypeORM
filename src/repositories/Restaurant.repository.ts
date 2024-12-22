import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/entity/restaurant.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class RestaurantRepository extends Repository<Restaurant> {
  constructor(private readonly dataSource: DataSource) {
    super(Restaurant, dataSource.createEntityManager());
  }
}
