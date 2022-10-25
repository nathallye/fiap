import { Injectable } from '@nestjs/common';
import { CreateLogisticDto } from './dto/create-logistic.dto';
import { UpdateLogisticDto } from './dto/update-logistic.dto';

@Injectable()
export class LogisticsService {
  create(createLogisticDto: CreateLogisticDto) {
    return 'This action adds a new logistic';
  }

  findAll() {
    return `This action returns all logistics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logistic`;
  }

  update(id: number, updateLogisticDto: UpdateLogisticDto) {
    return `This action updates a #${id} logistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} logistic`;
  }
}
