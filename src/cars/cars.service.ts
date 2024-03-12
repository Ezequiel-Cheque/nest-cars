import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

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

}
