import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import * as utils from '@utils/index';
import {systemSettings} from '@utils/setting';
@Injectable()
export class AddRoles {

  async setaddRoles(req,body): Promise<object> {
    try {
      let res  = await utils.checkPermi(req ,[systemSettings.menus.menuQuery]) as any;
      if(res.code == -1 ) return res;
      let roleKey = await AppDataSource.query(
        ` SELECT id FROM roles WHERE role_key = '${body.roleKey}' `,
      );
      if(roleKey.length > 0){
        return {
            code: -1,
            data: null,
            message: '权限字符已存在！',
          };
      }
      let resData =  await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(sqlMoudes.Roles)
      .values([{
        name:body.name,
        role_key:body.roleKey,
        roles:body.roles,
        checked_roles:''
        }])
      .execute();
      return {
        code:0,
        message:'添加成功',
        data:resData
      }
       
    } catch (error) {
        console.log('error',error);
        
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}