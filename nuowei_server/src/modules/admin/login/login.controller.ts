import { Controller, Get } from '@nestjs/common';
import { ApiTags,ApiOperation } from '@nestjs/swagger';
import { LoginService } from './login.service';
@ApiTags("登录")
@Controller('admin/login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}
    @ApiOperation({ summary: '系统登录接口' })
    @Get()
    getHello(): string {
      return this.loginService.getHello();
    }
}
