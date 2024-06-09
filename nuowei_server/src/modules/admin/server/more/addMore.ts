import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class AddMore {
  async setAddMore(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.more.moreAdd,
      ])) as any;
      if (res.code == -1) return res;
        let name = await AppDataSource.query(
          `SELECT id FROM more WHERE  name = '${body.name}' `,
        );
        if (name.length) {
          return {
            code: -1,
            data: null,
            message: '账号名已存在！',
          };
        }
      let resData = await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.More)
        .values([
          {
            name: body.name,
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
