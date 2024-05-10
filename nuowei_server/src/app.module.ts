import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { RegistryModule } from './modules/registry/registry.module';
// 连接数据库模块 
import { TypeOrmModule } from '@nestjs/typeorm';
import { cfg} from '@config/index';
@Module({
  imports: [TypeOrmModule.forRoot(cfg),LoginModule, RegistryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
