import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
import { ApiBody } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cars')
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
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carService.findOneById(id);
  }

  @Post()
  @ApiBody({ type: CreateCarDto })
  createCar( @Body() createCarDto: CreateCarDto ) {
    return this.carService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() body: UpdateCarDto
  ) {
    return this.carService.update(id, body);
  }

  @Delete(':id')
  deleteCar( @Param("id", ParseUUIDPipe) id: string ) {
    return this.carService.delete(id);
  }

}
