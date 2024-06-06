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
 * 获取用户信息
 *  @param req Request
 */
interface Request {
  user: {
    name: string;
    pwd: string;
    uid: string;
  };
}
export const getUserInfo = async (req: Request): Promise<object> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, pwd, uid } = req.user;
      let db = await AppDataSource.getRepository(
        sqlMoudes.User,
      ).createQueryBuilder();
      db.select('name,id,admin,status,url,admin,roles_id as rolesId');
      db.where('id = :uid', { uid });
      const userInfo = await db.execute();
      resolve({ ...userInfo[0] });
    } catch (error) {
      reject(error);
    }
  });
};
/**
 *  获取路由数据
 *  @param req Request
 */
export const getRouter = async (
  req: Request,
  sidebar = false,
): Promise<object> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, pwd, uid } = req.user;
      let db = await AppDataSource.getRepository(
        sqlMoudes.RouterMenu,
      ).createQueryBuilder();
      db.select(
        `id,
         parent_id as parentId,
         path,
         hidden,
         redirect,
         always_show as alwaysShow,
         name,
         layout,
         parent_view as parentView,
         meta,
         component,
         sort,
         alone,
         role_key as roleKey,
         menu_type as menuType,
         title,
         icon,
         no_cache as noCache,
         update_time as updateTime,
         create_time as createTime`,
      );
      db.orderBy('sort', 'ASC');
      db.addOrderBy('update_time', 'DESC');
      const menuRes = await db.execute();
      const userRole: any = await getUserRole(req);
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
      let routerMenu = filterAsyncRoutes(menuRes, 0, '');
      //如果是独立的（一级）
      sidebar &&
        routerMenu.forEach((t) => {
          if (t.menuType === 'C' && (!t.children || t.children.length === 0)) {
            t.layout = 1;
            t.children = [{ ...t, layout: 0, alone: 1, children: undefined }];
            t.path = '/' + Math.random();
          }
        });
      resolve({ routerMenu, routerArr });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * 获取用户权限
 *  @param req Request
 */
export const getUserRole = async (req: Request): Promise<object> => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = (await getUserInfo(req)) as any;
      let result = await AppDataSource.query(
        `SELECT roles,role_key FROM roles WHERE FIND_IN_SET(id,'${user.rolesId}')`,
      );
      if (!result.length)
        return resolve({
          user,
          code: -1,
          message: '获取权限失败',
        });
      let roles = result.map((t) => t.roles);
      // 权限字符
      let roleKey = result.map((t) => t.role_key);
      //角色权限
      let roleAdmin = roleKey.some((t) => t === 'admin');
      resolve({
        userRole: roles.join(','),
        roleKey,
        user,
        roleAdmin,
        code: 0,
        message: '请求成功',
      });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * 菜单字符权限拦截
 *  @param req Request
 *  @param role  接口权限字符数组
 *  @param admin  是否管理员也要遵守（默认否）
 */
export const checkPermi = async (
  req: Request,
  role: any,
  admin = false,
): Promise<object> => {
  return new Promise(async (resolve, reject) => {
    try {
      let userRole = (await getUserRole(req)) as any;
      if ((userRole.roleAdmin || userRole.user.admin === 1) && !admin)
        return resolve(userRole);
      let result = (await AppDataSource.query(
        `SELECT role_key AS roleKey FROM router_menu WHERE FIND_IN_SET(id,'${userRole.userRole}')`,
      )) as any;
      let roleKeyArr = result.map((t) => t.roleKey).filter((t) => t);
      const hasPermission = role.some((permission) => {
        return roleKeyArr.includes(permission);
      });
      if (!hasPermission)
        return resolve({
          code: -1,
          message: '暂无此功能请求权限！',
          data: null,
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
  * 判断修改的名称是否和修改前的一样
  * @param sql  sql语句
  * @param sqlName  修改前的属性名
  * @param name  修改后的值
 */
export const  judgeUserName = async(sql:string,sqlName="name", name: string) =>{
  let result = await AppDataSource.query(sql) as any;
  if (result[0][sqlName] == name) return -1;
  return 1;
}