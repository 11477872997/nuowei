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
        systemSettings.menus.menuUp,
      ])) as any;
      if (res.code == -1)
        return { code: res.code, data: res.data, message: res.message };
    //   let sql = `UPDATE  router_menu SET
    //      parent_id = '${body.parentId}',
    //      path = '${body.path}',
    //      hidden ='${body.hidden}',
    //      name = '${body.name}',
    //      layout = '${body.parentId == 0 ? 1 : 0}',
    //      parent_view = '${body.parentView}',
    //      component = '${body.component}',
    //      sort = '${body.sort}',
    //      alone = '${body.alone}',
    //      role_key = '${body.roleKey}',
    //      menu_type = '${body.menuType}',
    //      title = '${body.title}',
    //      icon = '${body.icon}',
    //      no_cache = '${body.noCache}',
    //      meta ='${JSON.stringify(body.meta)}' 
    //      WHERE id= '${body.id}'`;
    //      console.log("sql",sql);
         
      return {};
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
  }
}
