import { ApiPropertyOptional} from '@nestjs/swagger';

 class Theme {
  @ApiPropertyOptional({ description: '默认背景'})
  menuBg: string
  @ApiPropertyOptional({ description: '展开背景'})
  menuSubBg: string
  @ApiPropertyOptional({ description: '默认文字'})
  menuText: string
  @ApiPropertyOptional({ description: '选中文字'})
  menuActiveText: string
  @ApiPropertyOptional({ description: '当前选中展开文字'})
  menuSubActiveText: string
  @ApiPropertyOptional({ description: 'hover背景'})
  menuHoverBg: string

}
class User {
  @ApiPropertyOptional({ description: '名称'})
  name: string
  @ApiPropertyOptional({ description: 'id'})
  id: string
  @ApiPropertyOptional({ description: '1:管理员,0:普通'})
  admin: string
  @ApiPropertyOptional({ description: '1:启用,2:禁用'})
  status: string
  @ApiPropertyOptional({ description: '头像'})
  url: string
  @ApiPropertyOptional({ description: '用户角色'})
  rolesId: string

}
// 登录接口
export class LoginRes {
    @ApiPropertyOptional({ description: '接口验证'})
    token: string
    @ApiPropertyOptional({ description: '角色key'})
    roleKey: Array<any>
    @ApiPropertyOptional({ description: '角色value'})
    userRole: string
    @ApiPropertyOptional({ description: 'true admin用户 false 普通用户'})
    roleAdmin: boolean
    @ApiPropertyOptional({ type: Theme })
    theme: Theme
    @ApiPropertyOptional({ type: User })
    user: User
 
  }
 