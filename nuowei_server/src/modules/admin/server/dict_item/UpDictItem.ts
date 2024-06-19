import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
@Injectable()
export class UpDictItem {
  async setUpDictItem(req, body): Promise<object> {
    try {
      let resData = await AppDataSource.query(`UPDATE dict_item SET
      dict_id = '${body.dictId}',
      dict_label = '${body.dictLabel}',
      dict_value = '${body.dictValue}',
      dict_sort = '${body.dictSort}',
      dict_class = '${body.dictClass}',
      status = '${body.status}',
        remark = '${body.remark ? body.remark : ''}'
        WHERE id = '${body.id}'`);
      return {
        code: 0,
        message: '修改成功',
        data: resData,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
