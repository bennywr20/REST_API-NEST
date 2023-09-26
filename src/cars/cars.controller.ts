import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarsDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(public readonly CarsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.CarsService.getCars();
  }

  @Get(':id')
  getCarsById(@Param('id') id: string) {
    if (id == 'a') {
      throw new NotFoundException(
        `El valor "${id}" no es un argumento valido singa tu madre! , ya me tienes harto con la misma mierda`,
      );
    }
    const car = this.CarsService.getCarsById(id);
    return car;
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCars(@Body() body: CreateCarsDto) {
    console.log(body);
    return this.CarsService.createCars(body);
  }
}
