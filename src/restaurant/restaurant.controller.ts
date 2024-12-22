import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RestaurantService } from './restaurant.service';
import { RestaurantDto } from 'src/dto/Request/restaurant.dto';

@Controller('restaurant')
@ApiTags('Restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post('create')
  @ApiBody({
    type: RestaurantDto,
  })
  async createRestaurant(@Body() req: RestaurantDto) {
    return this.restaurantService.createRestaurant(req);
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.restaurantService.findRestaurant(id);
  }

  @Get('with-items/:id')
  async findWithItems(@Param('id') id: string) {
    return this.restaurantService.findWithItems(id);
  }
}
