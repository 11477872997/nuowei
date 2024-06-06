import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import * as utils from '@utils/index';
import {systemSettings} from '@utils/setting';
@Injectable()
export class UpRoles {

  async setupRoles(req,body): Promise<object> {
    try {
      let res  = await utils.checkPermi(req ,[systemSettings.menus.menuQuery]) as any;
      if(res.code == -1 ) return res;
      //总管理不能操作
     let resadmin  =  await  utils.upAdminRole(body.id);
     if(resadmin.code == -1 ) return resadmin;
      let role_key = await utils.judgeUserName(`SELECT role_key FROM roles WHERE  id = '${body.id}' `,'role_key',body.roleKey);
      if(role_key == 1){
        let resultId = await AppDataSource.query( `SELECT id FROM roles WHERE role_key= '${body.roleKey}' `,);
        if(resultId.length > 0){
            return { code: -1, data: null, message: '权限字符已存在！' };
        }
      }
      let resData = await AppDataSource.query(`UPDATE roles SET
        roles = '${body.roles}',
        name = '${body.name}',
        role_key = '${body.roleKey}',
        checked_roles = '',
        WHERE id = '${body.id}'`);
      return {
        code:0,
        message:'修改成功',
        data:resData
      }
       
    } catch (error) {
        console.log('error',error);
        
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}