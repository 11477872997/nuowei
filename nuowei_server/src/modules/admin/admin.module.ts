import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { LoginService } from './login/login.service';
@Module({
  providers: [LoginService],
  controllers: [AdminController]
})
export class AdminModule {}
