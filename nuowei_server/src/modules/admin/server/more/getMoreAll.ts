import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
@Injectable()
export class GetMoreAll {
  async getMoreAll(body): Promise<object> {
    try {
      let sql = `SELECT id,name,remark FROM more`
      if (body.name) {
        (sql += 'name LIKE :name'), { name: `%${body.name}%` };
      }
      const results = await AppDataSource.query(sql);
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
