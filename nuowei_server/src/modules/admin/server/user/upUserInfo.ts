import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
@Injectable()
export class UpUserInfo {
  async upUserInfo(req, body): Promise<object> {
    try {
      const { name, pwd, uid } = req.user;
      let sqlId: any = await AppDataSource.query(`select name from user where id = '${uid}'`);
      // 判断用户是不是没改变
      if(sqlId[0].name == body.name){
       let db = await AppDataSource.query(
            `UPDATE  user SET url='${body.url?body.url:''}' WHERE id='${uid}'`,
          );
          return {
            code: 0,
            data: db,
            message: '修改成功！',
          };
      }else{
        let getName: any = await AppDataSource.query(`select name from user where name = '${body.name}'`);
        if (getName.length) {
          return {
            code: -1,
            data: null,
            message: '登陆账号已被使用！',
          };
        } else {
          let db = await AppDataSource.query(
            `UPDATE  user SET name= '${body.name}',url='${body.url?body.url:''}' WHERE id='${uid}'`,
          );
          return {
            code: 0,
            data:db,
            message: '修改成功！',
          };
        }
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
  }
}
