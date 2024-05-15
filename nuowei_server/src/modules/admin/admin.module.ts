import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { LoginService } from './login/login.service';
import {  JwtModule } from '@nestjs/jwt';
import { disposition} from '@config/index';
@Module({
  imports:[JwtModule.register({
    //生成token的key
    secret:disposition.jwtKey,
    // signOption可以在JwtModule设定或是在createToken时候设定
    signOptions: {
      //token的有效时长
        expiresIn: '1h',
    },
}),],
  providers: [LoginService,JwtModule],
  controllers: [AdminController]
})
export class AdminModule {}
