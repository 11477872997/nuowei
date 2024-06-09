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
    ){ }
    @Post('login')
    @ApiOperation({ summary: '登录',description:"这是一个系统登录接口"})
    @ApiResponse({ status: 200, description: '字段描述', type: dto.LoginRes })
    setlogin(@Body() CreatePostDto:dto.LoginReq) {
      return this.loginService.setlogin(CreatePostDto);
    }
}

@ApiTags("用户信息")
@Controller('admin')
export class InfoController {
  constructor(
    private readonly getUserInfo: serverMode.GetUserInfo,
    private readonly getRouter: serverMode.GetRouter,
    private readonly upUserPwdInfo: serverMode.UpUserPwdInfo,
    private readonly upUserInfo: serverMode.UpUserInfo,
    
  ){ }
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

}

@ApiTags("菜单管理")
@Controller('admin')
export class MenuController {
  constructor(
    private readonly getRouterSystem: serverMode.GetRouterSystem,
    private readonly changeMenu: serverMode.ChangeMenu,
    private readonly addMenu: serverMode.AddMenu,
    private readonly delMenu: serverMode.DelMenu,
    
  ){ }
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
  setdelMenu( @Req() req, @Body() CreatePostDto:dto.DelReq) {
    return this.delMenu.setDelMenu(req,CreatePostDto);
  }

}

@ApiTags("角色管理")
@Controller('admin')
export class RolesController {
  constructor(
    private readonly getRolesAll: serverMode.GetRolesAll,
    private readonly getRoles: serverMode.GetRoles,
    private readonly addRoles: serverMode.AddRoles,
    private readonly upRoles: serverMode.UpRoles,
    private readonly delRoles: serverMode.DelRoles,
  ){ }
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
    return this.getRoles.getRolesList(req,CreatePostDto);
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
  setupRoles( @Req() req, @Body() CreatePostDto:dto.UpRolesReq) {
    return this.upRoles.setupRoles(req,CreatePostDto);
  }
  @Post('delRoles')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '删除角色管理',description:"",})
  setDelRoles( @Req() req, @Body() CreatePostDto:dto.DelReq) {
    return this.delRoles.setDelRoles(req,CreatePostDto);
  }

}
@ApiTags("用户管理")
@Controller('admin')
export class UserController {
  constructor(
    private readonly getUser: serverMode.GetUser,
    private readonly addUser: serverMode.AddUser,
    private readonly upUser: serverMode.UpUser,
    private readonly delUser: serverMode.DelUser,
    private readonly upUserPwd: serverMode.UpUserPwd,
    private readonly upTheme: serverMode.UpTheme,
  ){ }
  @Post('getUser')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '获取用户管理分页列表',description:"",})
  @ApiResponse({ status: 200, description: '字段描述', type: dto.GetUserRes })
  GetUser( @Req() req, @Body() CreatePostDto:dto.GetUserReq) {
    return this.getUser.getUserList(req,CreatePostDto);
  }
  @Post('addUser')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '添加用户管理',description:"",})
  setAddUser( @Req() req, @Body() CreatePostDto:dto.AddUserReq) {
    return this.addUser.setAddUser(req,CreatePostDto);
  }
  @Post('upUser')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '修改用户管理',description:"",})
  setUpUser( @Req() req, @Body() CreatePostDto:dto.UpUserReq) {
    return this.upUser.setUpUser(req,CreatePostDto);
  }
  @Post('delUser')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '删除用户管理',description:"",})
  setDelUser( @Req() req, @Body() CreatePostDto:dto.DelReq) {
    return this.delUser.setDelUser(req,CreatePostDto);
  }
  @Post('upUserPwd')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '修改用户密码',description:"",})
  setUpUserPwd( @Req() req, @Body() CreatePostDto:dto.UpUserPwdReq) {
    return this.upUserPwd.setUpUserPwd(req,CreatePostDto);
  }
  @Post('upTheme')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '修改用户主题',description:"",})
  setUpTheme( @Req() req, @Body() CreatePostDto:dto.UpThemeReq) {
    return this.upTheme.setUpTheme(req,CreatePostDto);
  }
}
@ApiTags("多账号管理")
@Controller('admin')
export class MoreController {
  constructor(
    private readonly getMoreAll: serverMode.GetMoreAll,
    private readonly getMore: serverMode.GetMore,
    private readonly addMore: serverMode.AddMore,
    private readonly upMore: serverMode.UpMore,
    private readonly delMore: serverMode.DelMore,
  ){ }
  @Post('getMoreAll')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '获取多账号所有列表',description:"",})
  @ApiResponse({ status: 200, description: '字段描述', type: dto.GetMoreAllRes })
  GetMoreAll() {
    return this.getMoreAll.getMoreAll();
  }
  @Post('getMore')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '获取多账号管理分页列表',description:"",})
  @ApiResponse({ status: 200, description: '字段描述', type: dto.GetMoreRes })
  GetMore( @Req() req, @Body() CreatePostDto:dto.GetMoreReq) {
    return this.getMore.getMoreList(req,CreatePostDto);
  }
  @Post('addMore')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '添加多账号管理',description:"",})
  setAddMore( @Req() req, @Body() CreatePostDto:dto.AddMoreReq) {
    return this.addMore.setAddMore(req,CreatePostDto);
  }
  @Post('upMore')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '修改多账号管理',description:"",})
  setUpMore( @Req() req, @Body() CreatePostDto:dto.UpMoreReq) {
    return this.upMore.setUpMore(req,CreatePostDto);
  }
  @Post('delMore')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '删除多账号管理',description:"",})
  setDelMore( @Req() req, @Body() CreatePostDto:dto.DelReq) {
    return this.delMore.setDelMore(req,CreatePostDto);
  }
}

@ApiTags("字典管理")
@Controller('admin')
export class DictController {
  constructor(
    private readonly getDictAll: serverMode.GetDictAll,
    private readonly getDict: serverMode.GetDict,
    private readonly addDict: serverMode.AddDict,
    private readonly upDict: serverMode.UpDict,
    private readonly delDict: serverMode.DelDict,
  ){ }
  @Post('getDictAll')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '获取所有字典列表',description:"",})
  @ApiResponse({ status: 200, description: '字段描述', type: dto.GetDictAllRes })
  getDictAllList() {
    return this.getDictAll.getDictAllList();
  }
  @Post('getDict')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '获取字典分页列表',description:"",})
  @ApiResponse({ status: 200, description: '字段描述', type: dto.GetDictRes })
  getDictList( @Req() req, @Body() CreatePostDto:dto.GetDictReq) {
    return this.getDict.getDictList(req,CreatePostDto);
  }
  @Post('addDict')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '添加字典管理',description:"",})
  setAddDict( @Req() req, @Body() CreatePostDto:dto.AddDictReq) {
    return this.addDict.setAddDict(req,CreatePostDto);
  }
  @Post('upDict')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '修改字典管理',description:"",})
  setUpDict( @Req() req, @Body() CreatePostDto:dto.UpDictReq) {
    return this.upDict.setUpDict(req,CreatePostDto);
  }
  @Post('delDict')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '删除字典管理',description:"",})
  setDelDict( @Req() req, @Body() CreatePostDto:dto.DelReq) {
    return this.delDict.setDelDict(req,CreatePostDto);
  }
}
@ApiTags("字典项目")
@Controller('admin')
export class DictItemController {
  constructor(
    private readonly getDictAll: serverMode.GetDictItemAll,
    private readonly getDictItem: serverMode.GetDictItem,
    // private readonly addDict: serverMode.AddDict,
    // private readonly upDict: serverMode.UpDict,
    // private readonly delDict: serverMode.DelDict,
  ){ }
  @Post('getDictItemAll')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '获取所有字典项目列表',description:"",})
  @ApiResponse({ status: 200, description: '字段描述', type: dto.GetDictItemRes })
  getDictAllList(@Body() CreatePostDto:dto.GetDictItemAllReq) {
    return this.getDictAll.getDictAllList(CreatePostDto);
  }
  @Post('getDictItem')
  @ApiBearerAuth()
  @UseGuards( AuthGuard('jwt'))
  @ApiOperation({ summary: '获取字典项目分页列表',description:"",})
  @ApiResponse({ status: 200, description: '字段描述', type: dto.GetDictItemRes })
  getDictItemList( @Req() req, @Body() CreatePostDto:dto.GetDictItemReq) {
    return this.getDictItem.getDictItemList(req,CreatePostDto);
  }
  // @Post('addDict')
  // @ApiBearerAuth()
  // @UseGuards( AuthGuard('jwt'))
  // @ApiOperation({ summary: '添加字典管理',description:"",})
  // setAddDict( @Req() req, @Body() CreatePostDto:dto.AddDictReq) {
  //   return this.addDict.setAddDict(req,CreatePostDto);
  // }
  // @Post('upDict')
  // @ApiBearerAuth()
  // @UseGuards( AuthGuard('jwt'))
  // @ApiOperation({ summary: '修改字典管理',description:"",})
  // setUpDict( @Req() req, @Body() CreatePostDto:dto.UpDictReq) {
  //   return this.upDict.setUpDict(req,CreatePostDto);
  // }
  // @Post('delDict')
  // @ApiBearerAuth()
  // @UseGuards( AuthGuard('jwt'))
  // @ApiOperation({ summary: '删除字典管理',description:"",})
  // setDelDict( @Req() req, @Body() CreatePostDto:dto.DelReq) {
  //   return this.delDict.setDelDict(req,CreatePostDto);
  // }
}

