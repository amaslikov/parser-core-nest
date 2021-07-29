import { PartialType } from '@nestjs/mapped-types';
import { CreateParseCarDto } from './create-parse-car.dto';

export class UpdateParseCarDto extends PartialType(CreateParseCarDto) {}
