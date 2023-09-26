import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
@Injectable()
export class CarsService {
  private Cars = [
    { id: uuid(), model: 'toyota', brand: 'supra' },
    { id: uuid(), model: 'Honda', brand: 'supra' },
    { id: uuid(), model: 'Sal', brand: 'supra' },
  ];

  getCars() {
    return this.Cars;
  }

  getCarsById(id: string) {
    return this.Cars[id];
  }

  createCars(body: any) {
    this.Cars.push(body);
    return {
      status: 'ok',
      code: 200,
    };
  }
}
