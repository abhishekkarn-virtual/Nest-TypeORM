import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuItemsModule } from './menu-items/menu-items.module';
import { MenuItemsController } from './menu-items/menu-items.controller';
import { MenuItemsService } from './menu-items/menu-items.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      ssl: { rejectUnauthorized: false },
    }),
    RestaurantModule,
    MenuItemsModule,
  ],
  controllers: [RestaurantController, MenuItemsController],
  providers: [RestaurantService, MenuItemsService],
})
export class AppModule {}
