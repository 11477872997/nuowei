import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
@Injectable()
export class AddDictItem {
  async setAddDictItem(req, body): Promise<object> {
    try {
      let resData = await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.DictItem)
        .values([
          {
            dict_id:body.dictId,
            dict_label:body.dictLabel,
            dict_value:body.dictValue,
            dict_sort:body.dictSort,
            dict_class:body.dictClass,
            status: body.status ,
            remark: body.remark ? body.remark :'',
          },
        ])
        .execute();
      return {
        code: 0,
        data: '',
        message: '添加成功！',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
