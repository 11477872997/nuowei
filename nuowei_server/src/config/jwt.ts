import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { disposition} from '@config/index';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: disposition.jwtKey,
    });
  }
    // Passport会自动verify jwt，如果key不正确，或是相关信息
  async validate(payload) {
      //payload与加密前的json对象一样
    //因为已经验证过token了所以在payload中进行验证用户信息是否为空
    if(!payload.name || !payload.pwd || !payload.uid) {
      return false;
    }
    let user={ name: payload.name, pwd: payload.pwd ,uid:payload.uid};
    //返回后可在req中得到返回的值
    return user;
  }
}
