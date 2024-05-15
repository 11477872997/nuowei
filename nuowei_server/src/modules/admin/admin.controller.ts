import { Controller,Post,Get,Body } from '@nestjs/common';
import { ApiTags,ApiOperation,ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from "./login/login.dto";
import { LoginService } from './login/login.service';
import { ResInfo } from "./login/resinfo";
@ApiTags("系统接口")
@Controller('admin')
export class AdminController {
    constructor(
      private readonly loginService: LoginService
    ){}

    @Post('login')
    @ApiOperation({ summary: '登录',description:"这是一个系统登录接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: ResInfo })
    setAuth(@Body() CreatePostDto:CreatePostDto) {
      return this.loginService.setAuth(CreatePostDto);
    }
}
