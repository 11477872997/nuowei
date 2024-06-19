import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class DelRoles {
  async setDelRoles(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.role.roleDelte,
      ])) as any;
      if (res.code == -1) return res;
      //总管理不能操作
      let resadmin = await utils.upAdminRole(body.id);
      if (resadmin.code == -1) return resadmin;
      let resData = await AppDataSource.query(
        `DELETE FROM roles WHERE id = '${body.id}'`,
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
