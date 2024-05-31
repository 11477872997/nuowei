import * as Path from 'path';
import * as fs from 'fs';
import * as sqlMoudes from '@utils/sql';
import { AppDataSource } from '@config/dp';
/**
 * 状态码类型转换为中文输出
 * @param status  状态码
 */
export const codeStatus = (status: number): string => {
  let message: string = '请求成功';
  switch (status) {
    case 400:
      message = '参数错误';
      break;
    case 401:
      message = '未授权，请重新登录';
      break;
    case 403:
      message = '拒绝访问';
      break;
    case 404:
      message = '请求错误,未找到该资源';
      break;
    case 405:
      message = '请求方法未允许';
      break;
    case 408:
      message = '请求超时';
      break;
    case 500:
      message = '服务器端出错';
      break;
    case 501:
      message = '网络未实现';
      break;
    case 502:
      message = '网络错误';
      break;
    case 503:
      message = '服务不可用';
      break;
    case 504:
      message = '网络超时';
      break;
    case 505:
      message = 'http版本不支持该请求';
      break;
    default:
      message = `连接服务问题`;
  }
  return message;
};

/**
 * 获取用户角色
 */
interface Request {
  user: {
    name: string;
    pwd: string;
    uid: string;
  };
}
export const getTheUserRole = async (req: Request): Promise<object> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, pwd, uid } = req.user;
      let db = await AppDataSource.createQueryBuilder()
        .select('user')
        .from(sqlMoudes.User, 'user');
      db.select(
        'user.name,user.id,user.admin,user.status,user.url,user.admin,user.roles_id as rolesId',
      );
      db.where('user.id = :uid', { uid });
      const userInfo = await db.execute();
      const { rolesId } = userInfo[0];
      // 获取角色
      let db2 = await AppDataSource.createQueryBuilder()
        .select('roles')
        .from(sqlMoudes.Roles, 'roles');
      db2.select('roles.role_key as roleKey,roles.roles as userRole');
      db2.where(`FIND_IN_SET(roles.id, :id)`, { id: rolesId });
      const userRoles = await db2.execute();
      let arrRoles = {
        userRole: '',
        roleKey: [],
      };
      userRoles.forEach((element) => {
        arrRoles.userRole += (arrRoles.userRole ? ',' : '') + element.userRole;
        arrRoles.roleKey.push(element.roleKey);
      });
      let roleAdmin = arrRoles.roleKey.some((t) => t === 'admin');
      let data:any = {
        ...arrRoles,
        roleAdmin,
      };
      data.user =  userInfo[0]
      resolve({
        roleAdmin,
        roleKey:arrRoles["roleKey"],
        userRole:arrRoles["userRole"],
        user:userInfo[0]
      });
    } catch (error) {
      reject(error);
    }
  });
};
/**
 *  获取路由数据
 */
export const getRouter = async (
  req: Request,
  sidebar = false,
): Promise<object> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, pwd, uid } = req.user;
      let db = await AppDataSource.createQueryBuilder()
        .select('router_menu')
        .from(sqlMoudes.RouterMenu, 'router_menu');
      db.select(
        `router_menu.id,
          router_menu.parent_id as parentId,
          router_menu.path,
          router_menu.hidden,
          router_menu.redirect,
          router_menu.always_show as alwaysShow,
          router_menu.name,
          router_menu.layout,
          router_menu.parent_view as parentView,
          router_menu.meta,
          router_menu.component,
          router_menu.sort,
          router_menu.alone,
          router_menu.role_key as roleKey,
          router_menu.menu_type as menuType,
          router_menu.title,
          router_menu.icon,
          router_menu.no_cache as noCache,
          router_menu.update_time as updateTime,
          router_menu.create_time as createTime`,
      );
      db.orderBy('router_menu.sort', 'ASC');
      db.addOrderBy('router_menu.update_time', 'DESC');
      const menuRes = await db.execute();
      const userRole: any = await getTheUserRole(req);
      // //角色权限
      let roles = userRole.userRole.split(',');
      let routerArr = [];
      let filterAsyncRoutes = (lists, parentId, pathView = '') => {
        let resArr = [];
        let obj = {} as any;
        lists.map((t) => {
          let objs = { ...t };
          try {
            objs.meta = JSON.parse(objs.meta);
          } catch (err) {
            objs.meta = {};
          }
          objs.meta.title = objs.title;
          objs.meta.icon = objs.icon;
          objs.meta.noCache = objs.noCache;
          objs.pathView = t.path;
          //按钮自动隐藏
          if (objs.menuType === 'F') objs.hidden = 1;
          if (objs.parentId == parentId) {
            objs.path = pathView + objs.path;
            obj = {
              ...objs,
              children: filterAsyncRoutes(menuRes, objs.id, objs.path),
            };
            //菜单下有子级，单独拿出来
            if (
              obj.menuType === 'C' &&
              obj.children &&
              obj.children.length != 0
            ) {
              routerArr.push(...obj.children);
              sidebar && delete obj.children;
            }
            //是否为admin 用户
            if (userRole.user.admin == 1 || userRole.roleAdmin) {
              resArr.push(obj);
            } else {
              //只拿角色权限通过的
              if (roles.some((role) => obj.id == role)) resArr.push(obj);
            }
          }
        });
        return resArr;
      };
      let routerMenu = filterAsyncRoutes(menuRes, 0, "");
       //如果是独立的（一级）
        sidebar&&routerMenu.forEach(t=>{
          if(t.menuType==="C"&&(!t.children||t.children.length===0)){
              t.layout=1;
              t.children=[{...t, layout:0, alone:1, children:undefined,}]
              t.path="/"+Math.random();
          }
      });
      resolve({routerMenu,routerArr});
    } catch (error) {
      reject(error);
    }
  });
};
