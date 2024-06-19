import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
@Injectable()
export class UpDict {
  async setUpDict(req, body): Promise<object> {
    try {
      let type = await utils.judgeUserName(
        `SELECT type FROM dict WHERE  id = '${body.id}' `,
        'type',
        body.type,
      );
      if(type == 1){
        let resultType = await AppDataSource.query(
          `SELECT id FROM dict WHERE  type = '${body.type}' `,
        );
        if (resultType.length > 0) {
          return { code: -1, data: null, message: '字典类型已存在！' };
        }
      }
      let resData = await AppDataSource.query(`UPDATE dict SET
        name = '${body.name}',
        type = '${body.type}',
        remark = '${body.remark?body.remark:''}'
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
