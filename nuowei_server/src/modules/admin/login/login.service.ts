import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class LoginService {
  constructor(
    private readonly jwtService: JwtService,
  ){}

  async setAuth(body): Promise<object> {
    try {
    const {name,pwd} =  body;
     let db = await AppDataSource.createQueryBuilder().select("user").from(sqlMoudes.User, "user");
     db.where('user.name = :name', { name});
     const nameRes = await db.execute();
     if(!nameRes.length){
      return {
        data: null,
        message: "用户不存在",
      }
     };
     db.select("user.name,user.pwd,user.id as uid,user.admin");
     db.where('user.name = :name', { name} ).andWhere('user.pwd = :pwd', { pwd} );
     const pwdRes = await db.execute();
      if(!pwdRes.length){
        return {
          data: null,
          message: "密码不正确",
        }
      }else{
        return {
          data: {
            ...pwdRes[0],
            token: this.jwtService.sign({name,pwd})
          },
          message: "请求成功",
        }
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}
