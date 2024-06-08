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
      // 用户信息
      private readonly getUserInfo: serverMode.GetUserInfo,
      private readonly getRouter: serverMode.GetRouter,
      private readonly upUserPwdInfo: serverMode.UpUserPwdInfo,
      private readonly upUserInfo: serverMode.UpUserInfo,
      // 菜单管理
      private readonly getRouterSystem: serverMode.GetRouterSystem,
      private readonly changeMenu: serverMode.ChangeMenu,
      private readonly addMenu: serverMode.AddMenu,
      private readonly delMenu: serverMode.DelMenu,
      // 角色管理
      private readonly getRolesAll: serverMode.GetRolesAll,
      private readonly getRoles: serverMode.GetRoles,
      private readonly addRoles: serverMode.AddRoles,
      private readonly upRoles: serverMode.UpRoles,
      private readonly delRoles: serverMode.DelRoles,
      // 用户管理
      private readonly getUser: serverMode.GetUser,
      private readonly addUser: serverMode.AddUser,
      // 多账号管理
      private readonly getMoreAll: serverMode.GetMoreAll,
      
    ){ }

    @Post('login')
    @ApiOperation({ summary: '登录',description:"这是一个系统登录接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.LoginRes })
    setlogin(@Body() CreatePostDto:dto.LoginReq) {
      return this.loginService.setlogin(CreatePostDto);
    }
 // 用户信息
    @Post('getUserInfo')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '用户信息',description:"这是一个获取当前token用户信息接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.LoginRes })
    getInfo(@Req() req) {
      return this.getUserInfo.getInfo(req);
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

    @Post('getRouter')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '获取我的菜单',description:"这是一个获取当前token用户路由数据侧边栏"})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetRouterRes })
    setRouter(@Req() req) {
      return this.getRouter.setRouter(req);
    }
// 菜单管理
    @Post('getRouterSystem')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '菜单管理列表',description:"获取当前token用户菜单管理",})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetRouterRes })
    getRouterSystemList( @Req() req, @Body() CreatePostDto) {
      return this.getRouterSystem.getRouterSystem(req,CreatePostDto);
    }

    @Post('addMenu')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '菜单管理添加',description:"",})
    setaddMenu( @Req() req, @Body() CreatePostDto:dto.GetRouterReq) {
      return this.addMenu.setAddMenu(req,CreatePostDto);
    }

    @Post('changeMenu')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '菜单管理修改',description:"",})
    setchangeMenu( @Req() req, @Body() CreatePostDto:dto.ChangeMenuReq) {
      return this.changeMenu.setChangeMenu(req,CreatePostDto);
    }

    @Post('delMenu')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '菜单管理删除',description:"",})
    setdelMenu( @Req() req, @Body() CreatePostDto:dto.delReq) {
      return this.delMenu.setDelMenu(req,CreatePostDto);
    }
// 角色管理
    @Post('getRolesAll')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '获取角色管理全部列表',description:"",})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetRolesRes })
    GetRolesAll() {
      return this.getRolesAll.getRolesAll();
    }
    @Post('getRoles')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '获取角色管理分页列表',description:"",})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetRolesRes })
    GetRoles( @Req() req, @Body() CreatePostDto:dto.GetRolesReq) {
      return this.getRoles.GetRoles(req,CreatePostDto);
    }
    @Post('addRoles')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '添加角色管理',description:"",})
    setaddRoles( @Req() req, @Body() CreatePostDto:dto.AddRolesReq) {
      return this.addRoles.setaddRoles(req,CreatePostDto);
    }
    @Post('upRoles')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '修改角色管理',description:"",})
    setupRoles( @Req() req, @Body() CreatePostDto:dto.upRolesReq) {
      return this.upRoles.setupRoles(req,CreatePostDto);
    }
    @Post('delRoles')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '删除角色管理',description:"",})
    setDelRoles( @Req() req, @Body() CreatePostDto:dto.delReq) {
      return this.delRoles.setDelRoles(req,CreatePostDto);
    }
// 用户管理    
    @Post('getUser')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '获取用户管理分页列表',description:"",})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetUserRes })
    GetUser( @Req() req, @Body() CreatePostDto:dto.GetUserReq) {
      return this.getUser.GetUser(req,CreatePostDto);
    }
    @Post('addUser')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '添加用户管理',description:"",})
    // @ApiResponse({ status: 200, description: '字段描述', type: dto.GetUserRes })
    setAddUser( @Req() req, @Body() CreatePostDto:dto.AdduserReq) {
      return this.addUser.setAddUser(req,CreatePostDto);
    }
// 多账号管理
    @Post('getMoreAll')
    @ApiBearerAuth()
    @UseGuards( AuthGuard('jwt'))
    @ApiOperation({ summary: '获取多账号所有列表',description:"",})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.GetMoreAllRes })
    GetMoreAll() {
      return this.getMoreAll.getMoreAll();
    }
}

