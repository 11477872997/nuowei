import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class AddMenu {
  async setAddMenu(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.menus.menuAdd,
      ])) as any;
      if (res.code == -1) return res;
      if (body.roleKey) {
        let role_key = await AppDataSource.query(
          `SELECT id FROM router_menu WHERE role_key = '${body.roleKey}' `,
        );
        if (role_key.length) {
          return {
            code: -1,
            data: null,
            message: '权限字符已存在！',
          };
        }
      }
      if (body.name) {
        let name = await AppDataSource.query(
          `SELECT id FROM router_menu WHERE name ='${body.name}' `,
        );
        if (name.length) {
          return {
            code: -1,
            data: null,
            message: '页面名称已存在！！',
          };
        }
      }
      let meta = {};
      let resData = await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.RouterMenu)
        .values([
          {
            parent_id: body.parentId,
            path: body.path,
            hidden: body.hidden,
            name: body.name,
            layout: body.parentId == 0 ? 1 : 0,
            parent_view: body.parentView,
            component: body.component,
            redirect: '',
            sort: body.sort,
            alone: body.alone,
            role_key: body.roleKey ? body.roleKey : '',
            menu_type: body.menuType,
            title: body.title,
            icon: body.icon,
            no_cache: body.noCache,
            meta: JSON.stringify(meta),
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
