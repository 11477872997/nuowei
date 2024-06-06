import { Controller,Post,Get,Body,UseGuards,Req,Module, DynamicModule,Inject } from '@nestjs/common';
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
      private readonly upUserInfo: serverMode.UpUserInfo,
      private readonly getRouterSystem: serverMode.GetRouterSystem,
      private readonly changeMenu: serverMode.ChangeMenu,
      private readonly addMenu: serverMode.AddMenu,
      private readonly delMenu: serverMode.DelMenu,
      
    ){
     
    }


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
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '获取路由数据',description:"这是一个获取当前token用户路由数据侧边栏"})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetRouterRes })
    setRouter(@Req() req) {
      return this.getRouter.setRouter(req);
    }
    @Post('upUserPwdInfo')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '修改密码',description:"修改当前token用户密码"})
    setUpInfoPwd(@Req() req, @Body() CreatePostDto:dto.UpUserPwdInfoReq) {
      return this.upUserPwdInfo.upInfoPwd(req,CreatePostDto);
    }
    @Post('upUserInfo')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '修改我的信息',description:"修改当前token用户信息"})
    setUpUserInfo( @Req() req, @Body() CreatePostDto:dto.UpUserInfoReq) {
      return this.upUserInfo.upUserInfo(req,CreatePostDto);
    
    }
    @Post('getRouterSystem')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '菜单管理获取',description:"获取当前token用户菜单管理",})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetRouterRes })
    getRouterSystemList( @Req() req, @Body() CreatePostDto) {
      return this.getRouterSystem.getRouterSystem(req,CreatePostDto);
    
    }
    @Post('addMenu')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '菜单管理添加',description:"添加菜单管理",})
    setaddMenu( @Req() req, @Body() CreatePostDto:dto.GetRouterReq) {
      return this.addMenu.setAddMenu(req,CreatePostDto);
    
    }
    @Post('changeMenu')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '菜单管理修改',description:"修改菜单管理",})
    setchangeMenu( @Req() req, @Body() CreatePostDto:dto.ChangeMenu) {
      return this.changeMenu.setChangeMenu(req,CreatePostDto);
    
    }
    @Post('delMenu')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '菜单管理删除',description:"删除菜单管理",})
    setdelMenu( @Req() req, @Body() CreatePostDto:dto.delMenu) {
      return this.delMenu.setDelMenu(req,CreatePostDto);
    
    }
}

