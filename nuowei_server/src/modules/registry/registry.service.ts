import { Injectable,HttpException,HttpStatus   } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dict } from '@sql/dict';
import { AppDataSource } from '@config/dp';
// import { DictItem } from "@entity/dict_item.entity";
// import { More } from "@entity/more.entity";
// import { Roles } from "@entity/roles.entity";
// import { RouterMenu } from "@entity/router_menu.entity";
// import { Tests } from "@entity/tests.entity";
// import { Theme } from "@entity/theme.entity";
@Injectable()
export class RegistryService {
  async setAuth(): Promise<Dict[]> {
    try {
      const db = AppDataSource.createQueryBuilder()
        .insert()
        .into(Dict)
        .values([
          {
            id: '123123请问123请问1312332342',
            name: '字典1',
            type: 'type1',
            remark: '第一',
            update_time: '2023-05-25 10:29:01',
            create_time: '2023-05-25 10:29:01',
          },
          {
            id: '2234211231231其味无穷2334',
            name: '字典2',
            type: 'type2',
            remark: '第二',
            update_time: '2023-05-25 10:29:01',
            create_time: '2023-05-25 10:29:01',
          },
        ]);
      const res = await db.execute();
      return [];
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
  }
}
