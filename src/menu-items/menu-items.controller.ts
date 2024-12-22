import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MenuItemsDTO } from 'src/dto/Request/menu-items.dto';
import { MenuItemsService } from './menu-items.service';

@Controller('menu-items')
@ApiTags('MenuItems')
export class MenuItemsController {
  constructor(private readonly menuItemsService: MenuItemsService) {}

  @Post('add')
  async addMenu(@Body() reqst: MenuItemsDTO) {
    return this.menuItemsService.addMenu(reqst);
  }
}
