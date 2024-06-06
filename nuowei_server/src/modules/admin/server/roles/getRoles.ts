import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import * as utils from '@utils/index';
import {systemSettings} from '@utils/setting';
@Injectable()
export class GetRoles {

  async GetRoles(req,body): Promise<object> {
    try {
      let res  = await utils.checkPermi(req ,[systemSettings.menus.menuQuery]) as any;
      if(res.code == -1 ) return { code:res.code, data:res.data, message:res.message};
    const db = await AppDataSource.getRepository(sqlMoudes.Roles).createQueryBuilder('role')
    .select([
        'role.id as id',
        'role.name as name',
        'role.roles as roles',
        'role.checked_roles AS checkedRoles',
        'role.role_key AS roleKey',
        'role.update_time AS updateTime',
        'role.create_time AS createTime'
    ]);
    if(body.name){
        db.where("name LIKE :name",{name: `%${body.name}%`} )
    }
    db.skip((body.page - 1) * body.size) .take(body.size).getMany();
    const dataRes = await db.execute();
      return {
        code:0,
        message:'请求成功',
        data:dataRes
      }
       
    } catch (error) {
        console.log('error',error);
        
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}