import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class DelUser {
  async setDelUser(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.user.userDelte,
      ])) as any;
      if (res.code == -1) return res;
      //总管理不能操作
      let resadmin = await utils.upAdmin(body.id);
      let user = (await utils.getUserInfo(req)) as any;
      if (resadmin.code == -1) return resadmin;
      if (user.id == body.id) {
        return {
          code: -1,
          message: '无法删除正在使用中的用户!',
          data: null,
        };
      }
      let resData = await AppDataSource.query(
        `
        DELETE FROM user 
          WHERE id = '${body.id}'
        `,
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
