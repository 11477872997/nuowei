import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';

@Injectable()
export class DelDictItem {
  async setDelDictItem(req, body): Promise<object> {
    try {
      let resData = await AppDataSource.query(
        `DELETE FROM dict_item WHERE id = '${body.id}'`,
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
