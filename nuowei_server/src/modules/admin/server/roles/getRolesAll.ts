import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import * as utils from '@utils/index';
import { systemSettings } from '@utils/setting';
@Injectable()
export class GetRolesAll {
  async getRolesAll(): Promise<object> {
    try {
      let resData = await AppDataSource.query(
        `SELECT id,name,roles,checked_roles AS checkedRoles,role_key AS roleKey FROM roles`,
      );
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
