import { Test, TestingModule } from '@nestjs/testing';
import { ParseCarsService } from './parse-cars.service';

describe('ParseCarsService', () => {
  let service: ParseCarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseCarsService],
    }).compile();

    service = module.get<ParseCarsService>(ParseCarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
