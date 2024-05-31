import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import * as utils from '@utils/index';
@Injectable()
export class GetUserInfo {

  async getInfo(req): Promise<object> {
    try {
       const {name,pwd,uid} = req.user;
       const userRole = await utils.getTheUserRole(req);
        // 获取主题
        let db3 = await AppDataSource.createQueryBuilder().select("theme").from(sqlMoudes.Theme, "theme");
        db3.select("theme.menu_bg as menuBg,theme.menu_sub_bg as menuSubBg,theme.menu_text as menuText,theme.menu_active_text as menuActiveText,theme.menu_sub_active_text as menuSubActiveText,theme.menu_hover_bg as menuHoverBg ");
        db3.where('theme.user_id = :uid', { uid});
        const userTheme = await db3.execute();
         return {
          data: {
            ...userRole,
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
