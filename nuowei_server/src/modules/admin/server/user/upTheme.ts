import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
@Injectable()
export class UpTheme {
  async setUpTheme(req, body): Promise<object> {
    try {
      let resData = await AppDataSource.query(
        `
        UPDATE  theme SET
         menu_bg ='${body.menuBg}',
         menu_sub_bg ='${body.menuSubBg}',
         menu_text = '${body.menuText}',
         menu_active_text = '${body.menuActiveText}',
         menu_sub_active_text = '${body.menuSubActiveText}',
         menu_hover_bg = '${body.menuHoverBg}'
          WHERE user_id = '${body.id}'
        `,
      );
    console.log(' ',  `
    UPDATE  theme SET
     menu_bg ='${body.menuBg}',
     menu_sub_bg ='${body.menuSubBg}',
     menu_text = '${body.menuText}',
     menu_active_text = '${body.menuActiveText}',
     menu_sub_active_text = '${body.menuSubActiveText}',
     menu_hover_bg = '${body.menuHoverBg}'
      WHERE user_id = '${body.id}'
    `)
      return {
        code: 0,
        message: '修改成功',
        data: resData,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
