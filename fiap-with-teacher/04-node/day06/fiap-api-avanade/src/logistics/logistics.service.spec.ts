import { Test, TestingModule } from '@nestjs/testing';
import { LogisticsService } from './logistics.service';

describe('LogisticsService', () => {
  let service: LogisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogisticsService],
    }).compile();

    service = module.get<LogisticsService>(LogisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
