import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistryService {
    getHello(): string {
        return '表数据插入成功';
      }
}
