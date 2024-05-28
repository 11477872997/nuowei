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
        // 获取角色
        let db2 = await AppDataSource.createQueryBuilder().select("roles").from(sqlMoudes.Roles, "roles");
        db2.select("roles.role_key as roleKey,roles.roles as userRole");
        db2.where(`FIND_IN_SET(roles.id, :id)`, { id: rolesId })
        const userRoles = await db2.execute();
        let arrRoles = {
          userRole:'',
          roleKey:[],
        }
        userRoles.forEach(element => {
          arrRoles.userRole += (arrRoles.userRole ? ',' : '') + element.userRole;
          arrRoles.roleKey.push(element.roleKey);
        });
        let roleAdmin = arrRoles.roleKey.some(t=>t==="admin");
        // 获取主题
        let db3 = await AppDataSource.createQueryBuilder().select("theme").from(sqlMoudes.Theme, "theme");
        db3.select("theme.menu_bg as menuBg,theme.menu_sub_bg as menuSubBg,theme.menu_text as menuText,theme.menu_active_text as menuActiveText,theme.menu_sub_active_text as menuSubActiveText,theme.menu_hover_bg as menuHoverBg ");
        db3.where('theme.user_id = :uid', { uid});
        const userTheme = await db3.execute();
         return {
          data: {
            user:userInfo,
            ...arrRoles,
            roleAdmin,
            theme:userTheme
          },
          message: "获取成功",
        }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}
