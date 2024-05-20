import { Controller,Post,Get,Body,UseGuards,Req} from '@nestjs/common';
import { ApiTags,ApiOperation,ApiResponse,ApiBearerAuth } from '@nestjs/swagger';
import  * as dtoReq from "./dto/reqinfo";
import * as dtoRes from "./dto/resinfo";
import  * as serverMode from './server';
import { AuthGuard } from '@nestjs/passport';
@ApiTags("系统接口")
@Controller('admin')
export class AdminController {
    constructor(
      private readonly loginService: serverMode.LoginService,
      private readonly getUserInfo: serverMode.GetUserInfo,
    ){}

    @Post('login')
    @ApiOperation({ summary: '登录',description:"这是一个系统登录接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: dtoRes.LoginRes })
    setlogin(@Body() CreatePostDto:dtoReq.LoginReq) {
      return this.loginService.setlogin(CreatePostDto);
    }
    @Get('getUserInfo')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '用户信息',description:"这是一个获取当前token用户信息接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: dtoRes.LoginRes })
    getInfo(@Req() req) {
      return this.getUserInfo.getInfo(req);
    }
}
