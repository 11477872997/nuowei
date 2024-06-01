import { Controller,Post,Get,Body,UseGuards,Req,Module, DynamicModule} from '@nestjs/common';
import { ApiTags,ApiOperation,ApiResponse,ApiBearerAuth } from '@nestjs/swagger';
import  * as dto from "./dto";
import  * as serverMode from './server';
import { AuthGuard } from '@nestjs/passport';
@ApiTags("系统接口")
@Controller('admin')
export class AdminController {
    constructor(
      private readonly loginService: serverMode.LoginService,
      private readonly getUserInfo: serverMode.GetUserInfo,
      private readonly getRouter: serverMode.GetRouter,
      private readonly upUserPwdInfo: serverMode.UpUserPwdInfo,
    ){}

    @Post('login')
    @ApiOperation({ summary: '登录',description:"这是一个系统登录接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.LoginRes })
    setlogin(@Body() CreatePostDto:dto.LoginReq) {
      return this.loginService.setlogin(CreatePostDto);
    }
    @Post('getUserInfo')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '用户信息',description:"这是一个获取当前token用户信息接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.LoginRes })
    getInfo(@Req() req) {
      return this.getUserInfo.getInfo(req);
    }
    @Post('getRouter')
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '获取路由数据',description:"这是一个获取当前token用户路由数据侧边栏"})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetRouterRes })
    setRouter(@Req() req) {
      return this.getRouter.setRouter(req);
    }
    @Post('upUserPwdInfo')
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '修改密码',description:"修改当前token用户密码"})
    upInfoPwd(@Req() req, @Body() CreatePostDto:dto.UpUserPwdInfoReq) {
      return this.upUserPwdInfo.upInfoPwd(req,CreatePostDto);
    }
}
