import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParseCarsService } from './parse-cars.service';
import { CreateParseCarDto } from './dto/create-parse-car.dto';
import { UpdateParseCarDto } from './dto/update-parse-car.dto';

@Controller('parse-cars')
export class ParseCarsController {
  constructor(private readonly parseCarsService: ParseCarsService) {}

  @Post()
  create(@Body() createParseCarDto: CreateParseCarDto) {
    return this.parseCarsService.create(createParseCarDto);
  }

  @Get()
  findAll() {
    return this.parseCarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parseCarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParseCarDto: UpdateParseCarDto) {
    return this.parseCarsService.update(+id, updateParseCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parseCarsService.remove(+id);
  }
}
