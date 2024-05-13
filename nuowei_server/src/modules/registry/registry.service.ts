import { Injectable,HttpException,HttpStatus   } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AppDataSource } from '@config/dp';
import { Dict } from '@sql/dict';
// import { DictItem } from "@sql/dict_item";
import { More } from "@sql/more";
// import { Roles } from "@sql/roles";
// import { RouterMenu } from "@sql/router_menu";
// import { Tests } from "@sql/tests.entity";
// import { Theme } from "@entity/theme";
@Injectable()
export class RegistryService {
  async setAuth():Promise<object>{
    try {
      // 插入字典数据
      await  AppDataSource.createQueryBuilder()
        .insert()
        .into(Dict)
        .values([
          {
            id: '4dwe',
            name: '字典1',
            type: 'type1',
            remark: '第一',
            update_time: '2023-05-25 10:29:01',
            create_time: '2023-05-25 10:29:01',
          },
          {
            id: '123',
            name: '字典2',
            type: 'type2',
            remark: '第二',
            update_time: '2023-05-25 10:29:01',
            create_time: '2023-05-25 10:29:01',
          },
        ]).execute();

      // AppDataSource.createQueryBuilder()
      //   .insert()
      //   .into(More)
      //   .values([
      //     {
      //       id: '4dwe',
      //       name: '字典1',
      //       remark: '第一',
      //       update_time: '2023-05-25 10:29:01',
      //       create_time: '2023-05-25 10:29:01',
      //     },
      //     {
      //       id: '123',
      //       name: '字典2',
      //       remark: '第二',
      //       update_time: '2023-05-25 10:29:01',
      //       create_time: '2023-05-25 10:29:01',
      //     },
      //   ]).execute();

      return {
        data:null,
        message:'插入成功'
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
  }
}
