import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { LoginModule } from './login/login.module';
// import { LoginService } from './login/login.service';
// import {LoginController } from './login/login.controller';
@Module({
  imports: [LoginModule],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
