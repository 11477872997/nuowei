import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class AddUser {
  async setAddUser(req, body): Promise<object> {
    try {
      let res = (await utils.checkPermi(req, [
        systemSettings.user.userAdd,
      ])) as any;
      if(res.code == -1 ) return res;
      if(body.name){
        let name = await AppDataSource.query(
          `SELECT id FROM user WHERE  name ='${body.name}' `,
        );
        if(name.length) {
          return {
            code: -1,
            data: null,
            message: '用户名已被使用！',
          };
        }
      }
     let resData =  await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(sqlMoudes.User)
      .values([{
        name:body.name,
        status:body.status?body.status:1,
        roles_id:body.rolesId,
        remark:body.remark?body.remark:'',
        pwd:body.pwd,
        more_id :body.moreId,
        url:body.url?body.url:'',
        }]) 
      .execute() as any;
      let resTheme =  await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(sqlMoudes.Theme)
      .values([{
        user_id:resData.identifiers[0].id,
        menu_bg:'#304156',
        menu_sub_bg:'#304156',
        menu_text:'#bfcad5',
        menu_active_text:'#409eff',
        menu_sub_active_text :'#fff',
        menu_hover_bg:'#001528',
        }])
      .execute();
     
      return {
        code: 0,
        data:resTheme,
        message: '添加成功！',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
