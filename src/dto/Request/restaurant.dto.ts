import { ApiProperty } from '@nestjs/swagger';

export class RestaurantDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  averagePrice: number;

  @ApiProperty()
  isActive: boolean;
}
