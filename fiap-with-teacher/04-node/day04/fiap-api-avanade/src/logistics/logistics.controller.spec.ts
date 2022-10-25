import { Test, TestingModule } from '@nestjs/testing';
import { LogisticsController } from './logistics.controller';
import { LogisticsService } from './logistics.service';

describe('LogisticsController', () => {
  let controller: LogisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogisticsController],
      providers: [LogisticsService],
    }).compile();

    controller = module.get<LogisticsController>(LogisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
