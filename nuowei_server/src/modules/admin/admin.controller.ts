import { Controller,Post,Body,Get } from '@nestjs/common';
import { ApiTags,ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from "./admin.dot";
import { LoginService } from './service/login.service';
@ApiTags("系统接口")
@Controller('admin')
export class AdminController {
    constructor(
      private readonly loginService: LoginService
    ){}

    @Post('login')
    @ApiOperation({ summary: '系统登录接口' })
    setAuth(@Body() body:CreatePostDto) {
      return this.loginService.setAuth(body);
    }
}
