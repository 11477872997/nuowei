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
        systemSettings.menus.menuAdd,
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
    //   let meta = {};
     let resData =  await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(sqlMoudes.User)
      .values([{
        name:body.name,
        status:body.status,
        roles_id:body.rolesId,
        remark:body.remark?body.remark:'',
        pwd:body.pwd,
        more_id :body.moreId,
        url:body.url?body.url:'',
        }])
      .execute();
      return {
        code: 0,
        data:'',
        message: '添加成功！',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
