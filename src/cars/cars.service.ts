import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private carsData = [
        {
            id: 1,
            brand: "BMW",
            model: "BMW Z4"
        },
        {
            id: 2,
            brand: "Volkswagen",
            model: "Vento"
        },
        {
            id: 3,
            brand: "Ford",
            model: "Fiesta"
        },
        {
            id: 4,
            brand: "Nissan",
            model: "March"
        }
    ];

    findAll() {
        return this.carsData
    }
    

    findOneById(id: number) {
        const car = this.carsData.find(car => car.id === id);
        if ( !car ) throw new NotFoundException(`Car with id ${id} not found`);
        
        return car;
    }

}
