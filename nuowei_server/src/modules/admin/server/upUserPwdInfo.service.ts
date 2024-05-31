import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import * as utils from '@utils/index';
@Injectable()
export class UpUserPwdInfo {

  async upInfoPwd(req,body): Promise<object> {
    try {
       const {name,pwd,uid} = req.user;
       let db = await AppDataSource.createQueryBuilder().update(sqlMoudes.User).set({ pwd:body['pwd'] })
       db.where('id = :id', { id: uid })
       const userInfo = await db.execute();
         return {
          data: {
            userInfo
          },
          message: "请求成功",
        }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}