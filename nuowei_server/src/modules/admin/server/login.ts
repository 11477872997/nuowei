import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class LoginService {
  constructor(private readonly jwtService: JwtService) {}

  async setlogin(body): Promise<object> {
    try {
      const { name, pwd } = body;
      let db = await AppDataSource.getRepository(
        sqlMoudes.User,
      ).createQueryBuilder();
      db.where('name = :name', { name });
      const nameRes = await db.execute();
      if (!nameRes.length) {
        return {
          data: null,
          message: '用户不存在',
          code: -1,
        };
      }
      db.select('name,id as uid,admin');
      db.where('name = :name', { name }).andWhere('pwd = :pwd', { pwd });
      const pwdRes = await db.execute();
      if (!pwdRes.length) {
        return {
          data: null,
          message: '密码不正确',
          code: -1,
        };
      } else {
        let uid = pwdRes[0].uid;
        return {
          data: {
            ...pwdRes[0],
            token: this.jwtService.sign({ name, pwd, uid }),
          },
          message: '请求成功',
        };
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
