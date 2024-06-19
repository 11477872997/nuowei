import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class GetDict {
  async getDictList(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.more.moreQuery,
      ])) as any;
      if (res.code == -1) return res;
      const db = await AppDataSource.getRepository(sqlMoudes.Dict)
        .createQueryBuilder()
        .select([
          'id',
          'name',
          'remark',
          'type',
          "DATE_FORMAT(update_time, '%Y-%m-%d %H:%i:%s') AS updateTime",
          "DATE_FORMAT(create_time, '%Y-%m-%d %H:%i:%s') AS createTime",
        ]);
      if (body.name) {
        db.where('name LIKE :name', { name: `%${body.name}%` });
      }
      db.skip((body.page - 1) * body.size)
        .take(body.size)
        .getMany();
      const dataRes = await db.execute();
      return {
        code: 0,
        message: '请求成功',
        data: dataRes,
        total: dataRes.length,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
