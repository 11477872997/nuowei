import { Controller,Post,Get,Body } from '@nestjs/common';
import { ApiTags,ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from "./login/login.dto";
import { LoginService } from './login/login.service';
@ApiTags("系统接口")
@Controller('admin')
export class AdminController {
    constructor(
      private readonly loginService: LoginService
    ){}

    @Post('login')
    @ApiOperation({ summary: '登录',description:"这是一个系统登录接口"})
    setAuth(@Body() body:CreatePostDto) {
      return this.loginService.setAuth(body);
    }
}
