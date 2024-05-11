import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './modules/login/login.module';
import { RegistryModule } from './modules/registry/registry.module';
@Module({
  imports: [LoginModule, RegistryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
