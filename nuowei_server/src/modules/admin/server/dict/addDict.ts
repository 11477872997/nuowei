import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
@Injectable()
export class AddDict {
  async setAddDict(req, body): Promise<object> {
    try {
        let name = await AppDataSource.query(
          `SELECT id FROM dict WHERE  type = '${body.type}' `,
        );
        if (name.length) {
          return {
            code: -1,
            data: null,
            message: '字典类型已存在！',
          };
        }
      let resData = await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.Dict)
        .values([
          {
            name: body.name,
            type: body.type,
            remark: body.remark  ? body.remark :'',
          },
        ])
        .execute();
      return {
        code: 0,
        data: resData,
        message: '添加成功！',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
