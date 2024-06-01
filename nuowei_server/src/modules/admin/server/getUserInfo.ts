import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import * as utils from '@utils/index';
@Injectable()
export class GetUserInfo {

  async getInfo(req): Promise<object> {
    try {
       const {name,pwd,uid} = req.user;
       const list:any = await utils.getTheUserRole(req);
       if(list.user.status == 0){
          return {
            data: {},
            code:-1,
            message: "你账号已被禁用，请联系管理员！！",
          }
       }
        // 获取主题
        let db3 = await AppDataSource.getRepository(sqlMoudes.Theme).createQueryBuilder();
        db3.select(`
        menu_bg as menuBg,
        menu_sub_bg as menuSubBg,
        menu_text as menuText,
        menu_active_text as menuActiveText,
        menu_sub_active_text as menuSubActiveText,
        menu_hover_bg as menuHoverBg`);
        db3.where('user_id = :uid', { uid});
        const userTheme = await db3.execute();
         return {
          data: {
            ...list,
            theme:userTheme[0]
          },
          message: "请求成功",
        }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}