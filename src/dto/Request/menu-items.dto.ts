import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class MenuItemsDTO {
  @ApiProperty()
  @IsNumber()
  rest_id: number;

  @ApiProperty()
  @IsString()
  item_name: string;

  @ApiProperty()
  @IsNumber()
  price: number;
}
