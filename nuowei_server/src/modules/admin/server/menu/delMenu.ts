import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class DelMenu {
  async setDelMenu(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.menus.menuDelte,
      ])) as any;
      if(res.code == -1 ) return res;
        let id = await AppDataSource.query(
          `SELECT id FROM router_menu WHERE parent_id = '${body.id}' `,
        );
        if (id.length) {
          return {
            code: -1,
            data: null,
            message: '删除失败，请先删除子级',
          };
        }
        let resDate = await AppDataSource.query(
            `DELETE FROM router_menu WHERE id = '${body.id}' `,
        );
      return {
        code: 0,
        data:resDate,
        message: '删除成功！',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
  }
}
