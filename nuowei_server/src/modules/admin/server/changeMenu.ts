import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class ChangeMenu {
  async setChangeMenu(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [ systemSettings.menus.menuUp])) as any;
      if (res.code == -1)return { code: res.code, data: res.data, message: res.message };
       let role_key = await utils.judgeUserName(`SELECT role_key FROM router_menu WHERE  id = '${body.id}' `,'role_key',body.roleKey);
       if(role_key == 1){
          let resultId = await AppDataSource.query(`SELECT id FROM router_menu WHERE  role_key = '${body.roleKey}' `) as any;
          if(resultId.length > 0){
            return { code: -1, data: null, message: '权限字符已存在！' };
          }
       }
       let name = await utils.judgeUserName(`SELECT name FROM router_menu WHERE  id = '${body.id}' `,'name',body.name);
       if(name == 1){
        let resultName = await AppDataSource.query(`SELECT id FROM router_menu WHERE  name = '${body.name}' `) as any;
        if(resultName.length > 0){
          return { code: -1, data: null, message: '页面名称已存在！' };
        }
     }
     let resData = await AppDataSource.query(`UPDATE  router_menu SET
         parent_id = '${body.parentId}',
         path = '${body.path}',
         hidden ='${body.hidden}',
         name = '${body.name}',
         layout = '${body.parentId == 0 ? 1 : 0}',
         parent_view = '${body.parentView}',
         component = '${body.component}',
         sort = '${body.sort}',
         alone = '${body.alone}',
         role_key = '${body.roleKey}',
         menu_type = '${body.menuType}',
         title = '${body.title}',
         icon = '${body.icon}',
         no_cache = '${body.noCache}',
         meta ='${JSON.stringify(body.meta)}' 
         WHERE id= '${body.id}'`);
      return {
        code: 0, data: resData, 
        message: '修改成功！'
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
  }
}
