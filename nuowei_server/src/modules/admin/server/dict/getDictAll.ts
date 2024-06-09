import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
@Injectable()
export class GetDictAll {
  async getDictAllList(): Promise<object> {
    try {
      let query = `
      SELECT id,name,create_time AS createTime,remark,type FROM dict WHERE 1=1
  `;
      const results = await AppDataSource.query(query);
      return {
        code: 0,
        message: '请求成功',
        data: results,
        total: results.length,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
