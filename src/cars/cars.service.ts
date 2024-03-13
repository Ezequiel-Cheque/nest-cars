import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';
import { throwError } from 'rxjs';

@Injectable()
export class CarsService {

    private carsData: Car[] = [
        {
            id: uuid(),
            brand: "BMW",
            model: "BMW Z4"
        },
        {
            id: uuid(),
            brand: "Volkswagen",
            model: "Vento"
        },
        {
            id: uuid(),
            brand: "Ford",
            model: "Fiesta"
        },
        {
            id: uuid(),
            brand: "Nissan",
            model: "March"
        }
    ];

    findAll() {
        return this.carsData
    }
    

    findOneById(id: string) {
        const car = this.carsData.find(car => car.id === id);
        if ( !car ) throw new NotFoundException(`Car with id ${id} not found`);
        
        return car;
    }

    create(createCarDto: CreateCarDto) {
        const newCar = {
            id: uuid(),
            ...createCarDto
        }
        this.carsData.push(newCar);

        return newCar;
    }

    update(id: string, updateCar: UpdateCarDto) {

        if ( updateCar.id && updateCar.id !== id )
            throw new BadRequestException("The ids car are not validate");

        let carDb = this.findOneById(id);

        this.carsData = this.carsData.map((car) => {

            if ( car.id == id ) {
                carDb = {
                    ...carDb,
                    ...updateCar,
                    id
                }
                return carDb
            }

            return car;
        });

        return carDb;
    }
}
