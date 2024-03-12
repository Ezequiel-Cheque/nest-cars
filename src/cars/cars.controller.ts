import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carService: CarsService
  ){}

  @Get()
  findAll() {
    return this.carService.findAll()
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.carService.findOneById(id);
  }

  @Post()
  @UsePipes( ValidationPipe )
  createCar( @Body() createCarDto: CreateCarDto ) {
    return createCarDto;
  }

  @Patch(':id')
  updateCar(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() body: any
  ) {
    return body;
  }

  @Delete(':id')
  deleteCar( @Param("id", ParseUUIDPipe) id: string ) {
    return {
      method: "delete",
      id
    }
  }

}
