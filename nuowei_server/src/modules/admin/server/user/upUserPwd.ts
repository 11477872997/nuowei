import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class UpUserPwd {
  async setUpUserPwd(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.user.userPwd,
      ])) as any;
      if (res.code == -1) return res;
      let resAdmin = await utils.getUserId(body.id);
      if (resAdmin[0].admin == 1) {
        let user = await utils.getUserInfo(req) as any;
        if (user.admin !== 1) {
          return {
            code: -1,
            message: '总管理密码只能总管理账号修改！',
            data: '',
          };
        }
      }
     let resData =  await AppDataSource.query(`UPDATE  user SET pwd = '${body.pwd}' WHERE id= '${body.id}'`) as any
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
