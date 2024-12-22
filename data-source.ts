import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  url: process.env.DATABASE_URL,
  synchronize: false, // Disable auto schema synchronization
  migrations: ['src/database/migrations/*.ts'],
  entities: ['dist/**/*.entity.js'],
  ssl: { rejectUnauthorized: false },
});
