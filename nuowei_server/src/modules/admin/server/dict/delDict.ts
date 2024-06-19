import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';

@Injectable()
export class DelDict {
  async setDelDict(req, body): Promise<object> {
    try {
         let  dictId = await AppDataSource.query(
        `SELECT dict_id FROM dict_item WHERE dict_id = '${body.id}'`,
      );
      if(dictId.length > 0){
        return {
            code: -1,
            message: '请删除关联的字典项目',
            data: null,
          };
      }
      let resData = await AppDataSource.query(
        `DELETE FROM dict WHERE id = '${body.id}'`,
      );
      return {
        code: 0,
        message: '删除成功',
        data: resData,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
