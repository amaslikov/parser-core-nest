import { Injectable } from '@nestjs/common';
import { CreateParseCarDto } from './dto/create-parse-car.dto';
import { UpdateParseCarDto } from './dto/update-parse-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, PrimaryColumn, Repository } from 'typeorm';
import { ParseCar } from './entities/parse-car.entity';

@Injectable()
export class ParseCarsService {
  constructor(
    @InjectRepository(ParseCar)
    private parseCarRepository: Repository<ParseCar>,
  ) {}

  create(createParseCarDto: CreateParseCarDto) {
    return this.parseCarRepository.save({
      site_id: 1,
      url: 'https://www.avito.ru/kamenolomni/avtomobili/vaz_2110_2002_2181859410',
      price: 95000,
      year: 2002,
      name: 'Ваз 2110',
      created_at: new Date().toISOString(),
      updated_at: new Date(),
    });
  }

  findAll() {
    return this.parseCarRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} parseCar`;
  }

  update(id: number, updateParseCarDto: UpdateParseCarDto) {
    return `This action updates a #${id} parseCar`;
  }

  remove(id: number) {
    return `This action removes a #${id} parseCar`;
  }
}
