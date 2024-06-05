import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import  * as serverMode from './server';
import {  JwtModule } from '@nestjs/jwt';
import { disposition} from '@config/index';
import { JwtStrategy} from '@config/jwt';
@Module({
  imports:[JwtModule.register({
    //生成token的key
    secret:disposition.jwtKey,
    // signOption可以在JwtModule设定或是在createToken时候设定
    signOptions: {
      //token的有效时长
        expiresIn: '168h',
    },
}),],
  providers: [JwtModule,
    ...Object.values(serverMode), 
    JwtStrategy],
  controllers: [AdminController]
})

export class AdminModule {}
