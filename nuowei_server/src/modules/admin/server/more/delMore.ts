import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class DelMore {
  async setDelMore(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.more.moreDelte,
      ])) as any;
      if (res.code == -1) return res;
      let resData = await AppDataSource.query(
        `DELETE FROM more WHERE id = '${body.id}'`,
      );
      return {
        code: 0,
        message: '删除成功',
        data: resData,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
