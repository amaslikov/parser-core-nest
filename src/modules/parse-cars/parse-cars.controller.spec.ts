import { Test, TestingModule } from '@nestjs/testing';
import { ParseCarsController } from './parse-cars.controller';
import { ParseCarsService } from './parse-cars.service';

describe('ParseCarsController', () => {
  let controller: ParseCarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParseCarsController],
      providers: [ParseCarsService],
    }).compile();

    controller = module.get<ParseCarsController>(ParseCarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
