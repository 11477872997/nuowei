import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import { JwtStrategy} from '@config/jwt';
@Injectable()
export class GetUserInfo {

  async getInfo(req): Promise<object> {
    try {
       const {name,pwd,uid} = req.user;
        let db = await AppDataSource.createQueryBuilder().select("user").from(sqlMoudes.User, "user");
        db.select("user.name,user.id,user.admin,user.status,user.url,user.admin,user.roles_id as rolesId");
        db.where('user.id = :uid', { uid});
        const userInfo = await db.execute();
        const {rolesId} = userInfo[0];
        let db2 = await AppDataSource.createQueryBuilder().select("roles").from(sqlMoudes.Roles, "roles");
        db2.select("roles.role_key as roleKey,roles.roles as userRole");
        db2.where('roles.id = :id', { id:rolesId});
        const userRoles = await db2.execute();
     console.log('uidRes',userRoles);
     
    //  if(!nameRes.length){
    //   return {
    //     data: null,
    //     message: "用户不存在",
    //   }
    //  };
    //  db.select("user.name,user.id as uid,user.admin");
    //  db.where('user.name = :name', { name} ).andWhere('user.pwd = :pwd', { pwd} );
    //  const pwdRes = await db.execute();
    //   if(!pwdRes.length){
    //     return {
    //       data: null,
    //       message: "密码不正确",
    //     }
    //   }else{
    //     return {
    //       data: {
    //         ...pwdRes[0],
    //         token: this.jwtService.sign({name,pwd})
    //       },
    //       message: "请求成功",
    //     }
    //   }
         return {
          data: {
            user:userInfo,
            theme:''
          },
          message: "密码不正确",
        }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}
