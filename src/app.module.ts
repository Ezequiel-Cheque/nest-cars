import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
