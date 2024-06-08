import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class GetRouterSystem {
  async getRouterSystem(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.menus.menuQuery,
      ])) as any;
      if (res.code == -1) return res;
      let { routerMenu } = (await utils.getRouter(req)) as any;
      return {
        code: 0,
        message: '请求成功',
        data: {
          routerMenu,
        },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
