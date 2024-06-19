import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
@Injectable()
export class GetRolesAll {
  async getRolesAll(body): Promise<object> {
    try {
      let sql = `SELECT id,name,roles,checked_roles AS checkedRoles,role_key AS roleKey FROM roles`;
      if (body.name) {
        (sql += 'name LIKE :name'), { name: `%${body.name}%` };
      }
      let resData = await AppDataSource.query(sql);
      
      return {
        code: 0,
        message: '请求成功',
        data: resData,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
