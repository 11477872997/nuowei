import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class UpUser {
  async setUpUser(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.user.userUp,
      ])) as any;
      if (res.code == -1) return res;
      //总管理不能操作
      let resadmin = await utils.upAdmin(body.id);
      if (resadmin.code == -1) return resadmin;
      let name = await utils.judgeUserName(
        `SELECT name FROM user WHERE  id = '${body.id}' `,
        'name',
        body.name,
      );
      if (name == 1) {
        let resultId = await AppDataSource.query(
          `SELECT id FROM user WHERE  name = '${body.name}' `,
        );
        if (resultId.length > 0) {
          return { code: -1, data: null, message: '用户名已被使用！' };
        }
      }
      let resData = await AppDataSource.query(
        `
        UPDATE user SET
        name = '${body.name}',
        status = '${body.status ? body.status : 1}',
        roles_id = '${body.rolesId}',
        remark = '${body.remark ? body.remark : ''}',
        more_id = '${body.moreId}',
        url = '${body.url ? body.url : ''}' 
          WHERE id = '${body.id}'
        `,
      );
  
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
