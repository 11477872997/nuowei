import { Controller,Post,Get,Body } from '@nestjs/common';
import { ApiTags,ApiOperation,ApiResponse } from '@nestjs/swagger';
import  * as dtoReq from "./dto/reqinfo";
import * as dtoRes from "./dto/resinfo";
import { LoginService } from './server/login.service';
@ApiTags("系统接口")
@Controller('admin')
export class AdminController {
    constructor(
      private readonly loginService: LoginService
    ){}

    @Post('login')
    @ApiOperation({ summary: '登录',description:"这是一个系统登录接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: dtoRes.LoginRes })
    setAuth(@Body() CreatePostDto:dtoReq.LoginReq) {
      return this.loginService.setAuth(CreatePostDto);
    }
}
