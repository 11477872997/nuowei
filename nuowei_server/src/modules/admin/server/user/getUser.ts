import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class GetUser {
  async GetUser(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.user.userQuery,
      ])) as any;
      if (res.code == -1) return res;
      let query = `
      SELECT 
        a.id AS id,
        name,
        status,
        roles_id AS rolesId,
        remark,admin,
        more_id AS moreId,
        url,
        DATE_FORMAT(a.update_time, '%Y-%m-%d %H:%i:%s') AS updateTime,
        DATE_FORMAT(a.create_time, '%Y-%m-%d %H:%i:%s') AS createTime,
        b.menu_bg AS menuBg,
        b.menu_sub_bg AS menuSubBg,
        b.menu_text AS menuText,
        b.menu_active_text AS menuActiveText,
        b.menu_sub_active_text AS menuSubActiveText,
        b.menu_hover_bg AS menuHoverBg 
      FROM 
        user AS a 
      LEFT 
        JOIN theme b ON a.id = b.user_id 
      WHERE 1=1
  `;
      if (body.name) {
        (query += 'name LIKE :name'), { name: `%${body.name}%` };
      }
      query += `LIMIT ${body.size} OFFSET ${(body.page - 1) * body.size} `;
      const results = await AppDataSource.query(query);
      return {
        code: 0,
        message: '请求成功',
        data: results,
        total: results.length,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
