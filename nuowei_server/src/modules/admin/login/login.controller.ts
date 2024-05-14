import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';
@Controller('admin/login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Get()
    getHello(): string {
      return this.loginService.getHello();
    }
}
