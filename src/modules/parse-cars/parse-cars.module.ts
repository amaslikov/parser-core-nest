import { Module } from '@nestjs/common';
import { ParseCarsService } from './parse-cars.service';
import { ParseCarsController } from './parse-cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParseCar } from './entities/parse-car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParseCar])],
  controllers: [ParseCarsController],
  providers: [ParseCarsService],
})
export class ParseCarsModule {}
