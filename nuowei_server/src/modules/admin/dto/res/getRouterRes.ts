import { ApiPropertyOptional} from '@nestjs/swagger';

 class List {
  @ApiPropertyOptional({ description: '父id,一级默认为0'})
  parentId: string
  @ApiPropertyOptional({ description: '路由地址'})
  path: string
  @ApiPropertyOptional({ description: '侧边栏状态:0-不显示,1-显示,当设置 true 的时候该路由不会在侧边栏出现 如401,login等页面'})
  hidden: number
  @ApiPropertyOptional({ description: '路由重定向：当设置 noRedirect 的时候该路由在面包屑导航中不可被点击'})
  redirect: number
  @ApiPropertyOptional({ description: '忽略路由规则：你可以设置 alwaysShow: true,这样它就会忽略之前定义的规则，一直显示根路由'})
  alwaysShow: number
  @ApiPropertyOptional({ description: '路由名字：设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题'})
  name: string
  @ApiPropertyOptional({ description: '是否包含导航:是否需要含导航栏,只需一级才设置这个（默认为false）'})
  layout: number
  @ApiPropertyOptional({ description: '是否需要嵌套二级:如果第二级里面还需要套级，需在当前级设置为true'})
  parentView: number
  @ApiPropertyOptional({ description: 'noCache是否缓存,title:名,icon:图标'})
  meta: string
  @ApiPropertyOptional({ description: '对应的页面路径'})
  component: string
  @ApiPropertyOptional({ description: '排序'})
  sort: number
  @ApiPropertyOptional({ description: '是否独立的（一级）'})
  alone: number
  @ApiPropertyOptional({ description: '权限字符'})
  roleKey: string
  @ApiPropertyOptional({ description: '菜单类型区分,F:按钮自动隐藏,C:子集,M:包含子集'})
  menuType: string
  @ApiPropertyOptional({ description: '菜单名称'})
  title: string
  @ApiPropertyOptional({ description: '菜单图标'})
  icon: string
  @ApiPropertyOptional({ description: '是否缓存'})
  noCache: number
  @ApiPropertyOptional({ description: '路由地址'})
  pathView: string
  @ApiPropertyOptional({type: List})
  children: List
}
// 路由接口
export class GetRouterList {
    @ApiPropertyOptional({ description: '路由数据', type: List })
    routerMenu: List
  }
 