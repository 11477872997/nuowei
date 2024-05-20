import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
@Injectable()
export class RegistryService {
  async setAuth(): Promise<object> {
    try {
      // 插入字典数据
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.Dict)
        .values([
          {
            id: "1",
            name: "字典1",
            type: "type1",
            remark: "第一",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
          {
            id: "2",
            name: "字典2",
            type: "type2",
            remark: "第二",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
        ])
        .execute();

      await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.More)
        .values([
          {
            id: "8",
            name: "第二家店铺",
            remark: "",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
          {
            id: "5",
            name: "第一家店铺",
            remark: "",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
        ])
        .execute();

      await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.Roles)
        .values([
          {
            id: "1",
            name: "admin",
            roles: "8,9,10,2,5,11,17,1",
            checked_roles: "8,9,10,5,11,17",
            role_key: "admin",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
          {
            id: "12",
            name: "中级管家2",
            roles:
              "49,30,43,31,122,121,123,128,125,124,1,10,8,26,27,69,76,32,113,44,65,68",
            checked_roles: "49,43,31,32,68",
            role_key: "middle",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
          {
            id: "13",
            name: "初级管家1",
            roles:
              "30,43,31,122,121,123,125,124,1,10,8,26,27,69,76,32,113,44,65,66",
            checked_roles:
              "49,43,31,10,8,26,27,76,32,113,110,109,108,107,105,104,103,102,100,99,98,97,96,92,91,90,89,66,68",
            role_key: "primary",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
        ])
        .execute();

      await AppDataSource.createQueryBuilder()
      .insert()
      .into(sqlMoudes.Tests)
      .values([
        {id:"72",name:"名称6",remark:"备注6",more_id:"6",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"71",name:"名称5",remark:"备注5",more_id:"5",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"70",name:"名称4",remark:"备注4",more_id:"4",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"69",name:"名称3",remark:"备注3",more_id:"3",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"68",name:"名称2",remark:"备注2",more_id:"2",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"67",name:"名称6",remark:"备注11",more_id:"6",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"66",name:"名称5",remark:"备注5",more_id:"5",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"65",name:"名称4",remark:"备注4",more_id:"4",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"64",name:"名称3",remark:"备注3",more_id:"3",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"63",name:"名称2",remark:"备注2",more_id:"2",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"62",name:"名称6",remark:"备注6",more_id:"6",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"61",name:"名称5",remark:"备注5",more_id:"5",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"60",name:"名称4",remark:"备注4",more_id:"4",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"59",name:"名称3",remark:"备注3",more_id:"3",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"58",name:"名称2",remark:"备注2",more_id:"2",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"57",name:"名称6",remark:"备注6",more_id:"6",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"56",name:"名称5",remark:"备注5",more_id:"5",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"55",name:"名称4",remark:"备注4",more_id:"4",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
        {id:"54",name:"名称3",remark:"备注3",more_id:"3",update_time: "2023-05-25 10:29:01",create_time: "2023-05-25 10:29:01"},
      ]).execute();

      await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.Theme)
        .values([
          {
            id: "1",
            user_id: "1",
            menu_bg: "#304156",
            menu_sub_bg: "#304156",
            menu_text: "#bfcad5",
            menu_active_text: "#409eff",
            menu_sub_active_text: "#fff",
            menu_hover_bg: "#001528",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
          {
            id: "25",
            user_id: "53",
            menu_bg: "#304156",
            menu_sub_bg: "#304156",
            menu_text: "#bfcad5",
            menu_active_text: "#409eff",
            menu_sub_active_text: "#fff",
            menu_hover_bg: "#001528",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
          {
            id: "26",
            user_id: "54",
            menu_bg: "#304156",
            menu_sub_bg: "#304156",
            menu_text: "#bfcad5",
            menu_active_text: "#409eff",
            menu_sub_active_text: "#fff",
            menu_hover_bg: "#001528",
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
        ])
        .execute();
      
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.User)
        .values([
          {
            id: "1",
            name: "admin",
            url: "",
            status: 1,
            roles_id: "1",
            remark: "管理员",
            admin: 1,
            pwd: "63f6deb737ab85677d6f11beea14a08b",
            more_id: 5,
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
          {
            id: "54",
            name: "用户2",
            url: "",
            status: 1,
            roles_id: "12",
            remark: "",
            admin: 0,
            pwd: "63f6deb737ab85677d6f11beea14a08b",
            more_id: 8,
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
          {
            id: "53",
            name: "用户1",
            url: "",
            status: 1,
            roles_id: "13",
            remark: "",
            admin: 0,
            pwd: "63f6deb737ab85677d6f11beea14a08b",
            more_id: 8,
            update_time: "2023-05-25 10:29:01",
            create_time: "2023-05-25 10:29:01",
          },
        ])
        .execute();

         await AppDataSource.createQueryBuilder()
        .insert()
        .into(sqlMoudes.RouterMenu)
        .values([
        {id:"1",parent_id:"0",title:"系统设置",icon:"international",no_cache:1,meta:"{}",path:"/menus",hidden:0,redirect:"",always_show:0,name:"",layout:1,parent_view:0,component:"/",sort:11,alone:0,role_key:"",menu_type:"M",update_time:"2023-05-25 10:29:01",create_time:"2023-05-25 10:29:01"},
        {id:"26",parent_id:"1",title:"用户管理",icon:"user",no_cache:1,meta:"{}",path:"/user",hidden:0,redirect:"",always_show:0,name:"user",layout:0,parent_view:0,component:"admin/user",sort:2,alone:0,role_key:"",menu_type:"C",update_time:"2023-05-25 10:29:01",create_time:"2023-05-25 10:29:01"},
        {id:"27",parent_id:"1",title:"多账号管理",icon:"peoples",no_cache:1,meta:"{}",path:"/more",hidden:0,redirect:"",always_show:0,name:"more",layout:0,parent_view:0,component:"admin/more",sort:3,alone:0,role_key:"",menu_type:"C",update_time:"2023-04-10 09:40:51",create_time:"2023-05-25 10:29:01"},
        {id:"49",parent_id:"0",title:"图标",icon:"icon",no_cache:1,meta:"{}",path:"/icon",hidden:0,redirect:"",always_show:0,name:"Icon",layout:1,parent_view:0,component:"icons/index",sort:0,alone:0,role_key:"",menu_type:"C",update_time:"2023-05-25 10:29:01",create_time:"2023-05-25 10:29:01"},
        {id:"8",parent_id:"1",title:"角色管理",icon:"role",no_cache:1,meta:"{}",path:"/role",hidden:0,redirect:"",always_show:0,name:"Role",layout:0,parent_view:0,component:"admin/role",sort:1,alone:0,role_key:"",menu_type:"C",update_time:"2023-05-25 11:20:21",create_time:"2023-05-25 10:29:01"},
        {id:"30",parent_id:"0",title:"测试数据",icon:"bug",no_cache:1,meta:"{}",path:"/test",hidden:0,redirect:"",always_show:0,name:"",layout:1,parent_view:0,component:"/",sort:0,alone:0,role_key:"",menu_type:"M",update_time:"2023-05-26 11:14:24",create_time:"2023-05-25 10:29:01"},
        {id:"10",parent_id:"1",title:"菜单管理",icon:"list",no_cache:1,meta:"{}",path:"/menu",hidden:0,redirect:"",always_show:0,name:"Menu",layout:0,parent_view:0,component:"admin/menu",sort:0,alone:0,role_key:"",menu_type:"C",update_time:"2023-05-26 11:14:37",create_time:"2023-05-25 10:29:01"},
        {id:"31",parent_id:"30",title:"多账号测试",icon:"bug",no_cache:1,meta:"{}",path:"/index",hidden:0,redirect:"",always_show:0,name:"testMore",layout:0,parent_view:0,component:"test/index",sort:1,alone:0,role_key:"",menu_type:"C",update_time:"2023-03-30 16:17:06",create_time:"2023-05-25 10:29:01"},
        {id:"65",parent_id:"44",title:"测试数据",icon:"eye",no_cache:1,meta:"{}",path:"",hidden:1,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"",menu_type:"F",update_time:"2023-03-27 15:18:34",create_time:"2023-05-25 10:29:01"},
        {id:"44",parent_id:"0",title:"菜单权限字符",icon:"eye",no_cache:1,meta:"{}",path:"",hidden:1,redirect:"",always_show:0,name:"",layout:1,parent_view:0,component:"/",sort:100,alone:0,role_key:"",menu_type:"F",update_time:"2023-04-11 11:24:29",create_time:"2023-05-25 10:29:01"},
        {id:"66",parent_id:"65",title:"权限测试1",icon:"form",no_cache:1,meta:"{}",path:"",hidden:1,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"roleKey2",menu_type:"F",update_time:"2023-06-07 16:44:24",create_time:"2023-05-25 10:29:01"},
        {id:"43",parent_id:"30",title:"权限隐藏API测试",icon:"eye",no_cache:1,meta:"{}",path:"/RoleApi",hidden:0,redirect:"",always_show:0,name:"RoleApi",layout:0,parent_view:0,component:"test/roleApi",sort:0,alone:0,role_key:"",menu_type:"C",update_time:"2023-03-15 15:52:16",create_time:"2023-05-25 10:29:01"},
        {id:"68",parent_id:"65",title:"权限测试2",icon:"example",no_cache:1,meta:"{}",path:"",hidden:1,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:1,alone:0,role_key:"roleKey2",menu_type:"F",update_time:"2023-03-27 15:23:59",create_time:"2023-05-25 10:29:01"},
        {id:"69",parent_id:"1",title:"字典管理",icon:"dashboard",no_cache:1,meta:"{}",path:"/dict",hidden:0,redirect:"",always_show:0,name:"Dict",layout:0,parent_view:0,component:"admin/dict",sort:4,alone:0,role_key:"",menu_type:"C",update_time:"2023-03-30 16:58:47",create_time:"2023-05-25 10:29:01"},
        {id:"97",parent_id:"95",title:"用户新增",icon:"user",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"user_add",menu_type:"F",update_time:"2023-04-03 16:47:22",create_time:"2023-05-25 10:29:01"},
        {id:"85",parent_id:"44",title:"系统设置",icon:"lock",no_cache:1,meta:"{}",path:"/",hidden:1,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"",menu_type:"F",update_time:"2023-04-03 15:21:17",create_time:"2023-05-25 10:29:01"},
        {id:"88",parent_id:"85",title:"菜单管理",icon:"documentation",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"",menu_type:"F",update_time:"2023-04-03 15:21:49",create_time:"2023-05-25 10:29:01"},
        {id:"89",parent_id:"88",title:"菜单查询",icon:"example",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"menu_query",menu_type:"F",update_time:"2023-04-03 15:22:46",create_time:"2023-05-25 10:29:01"},
        {id:"90",parent_id:"88",title:"菜单新增",icon:"example",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"menu_add",menu_type:"F",update_time:"2023-04-03 15:35:28",create_time:"2023-05-25 10:29:01"},
        {id:"91",parent_id:"88",title:"菜单修改",icon:"example",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"menu_up",menu_type:"F",update_time:"2023-04-03 15:36:06",create_time:"2023-05-25 10:29:01"},
        {id:"92",parent_id:"88",title:"菜单删除",icon:"example",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"menu_delete",menu_type:"F",update_time:"2023-04-03 15:36:19",create_time:"2023-05-25 10:29:01"},
        {id:"76",parent_id:"69",title:"字典项目",icon:"form",no_cache:1,meta:"{}",path:"/dictItem",hidden:0,redirect:"",always_show:0,name:"DictItem",layout:0,parent_view:0,component:"admin/dictItem",sort:0,alone:0,role_key:"",menu_type:"C",update_time:"2023-03-30 15:55:52",create_time:"2023-05-25 10:29:01"},
        {id:"95",parent_id:"85",title:"用户管理",icon:"user",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"",menu_type:"F",update_time:"2023-04-03 16:46:18",create_time:"2023-05-25 10:29:01"},
        {id:"96",parent_id:"95",title:"用户查询",icon:"user",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"user_query",menu_type:"F",update_time:"2023-04-03 16:46:56",create_time:"2023-05-25 10:29:01"},
        {id:"98",parent_id:"95",title:"用户修改",icon:"user",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"user_up",menu_type:"F",update_time:"2023-04-03 16:52:31",create_time:"2023-05-25 10:29:01"},
        {id:"99",parent_id:"95",title:"用户删除",icon:"user",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"user_delete",menu_type:"F",update_time:"2023-04-03 16:52:47",create_time:"2023-05-25 10:29:01"},
        {id:"100",parent_id:"95",title:"用户修改密码",icon:"eye",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"user_pwd",menu_type:"F",update_time:"2023-04-03 16:56:33",create_time:"2023-05-25 10:29:01"},
        {id:"101",parent_id:"85",title:"角色管理",icon:"peoples",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"",menu_type:"F",update_time:"2023-04-03 16:59:20",create_time:"2023-05-25 10:29:01"},
        {id:"102",parent_id:"101",title:"角色查询",icon:"peoples",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"role_query",menu_type:"F",update_time:"2023-04-03 16:59:33",create_time:"2023-05-25 10:29:01"},
        {id:"103",parent_id:"101",title:"角色新增",icon:"peoples",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"role_add",menu_type:"F",update_time:"2023-04-03 16:59:46",create_time:"2023-05-25 10:29:01"},
        {id:"104",parent_id:"101",title:"角色修改",icon:"peoples",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"role_up",menu_type:"F",update_time:"2023-04-03 17:00:04",create_time:"2023-05-25 10:29:01"},
        {id:"105",parent_id:"101",title:"角色删除",icon:"peoples",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"role_delete",menu_type:"F",update_time:"2023-04-03 17:00:24",create_time:"2023-05-25 10:29:01"},
        {id:"106",parent_id:"85",title:"多账户管理",icon:"nested",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"",menu_type:"F",update_time:"2023-04-03 17:12:25",create_time:"2023-05-25 10:29:01"},
        {id:"107",parent_id:"106",title:"多账户查询",icon:"people",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"more_query",menu_type:"F",update_time:"2023-04-03 17:31:07",create_time:"2023-05-25 10:29:01"},
        {id:"108",parent_id:"106",title:"多账户新增",icon:"people",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"more_add",menu_type:"F",update_time:"2023-04-03 17:31:30",create_time:"2023-05-25 10:29:01"},
        {id:"109",parent_id:"106",title:"多账户修改",icon:"people",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"more_up",menu_type:"F",update_time:"2023-04-03 17:31:47",create_time:"2023-05-25 10:29:01"},
        {id:"110",parent_id:"106",title:"多账户删除",icon:"people",no_cache:1,meta:"{}",path:"/",hidden:0,redirect:"",always_show:0,name:"",layout:0,parent_view:0,component:"/",sort:0,alone:0,role_key:"more_delete",menu_type:"F",update_time:"2023-04-03 17:32:07",create_time:"2023-05-25 10:29:01"},
        {id:"121",parent_id:"122",title:"上传图片",icon:"education",no_cache:1,meta:"{}",path:"/img",hidden:0,redirect:"",always_show:0,name:"Img",layout:0,parent_view:0,component:"components/img",sort:0,alone:0,role_key:"",menu_type:"C",update_time:"2023-05-29 14:35:29",create_time:"2023-05-26 16:18:37"},
        {id:"122",parent_id:"0",title:"文件管理",icon:"zip",no_cache:1,meta:"{}",path:"/file",hidden:0,redirect:"",always_show:0,name:"",layout:1,parent_view:0,component:"/",sort:0,alone:0,role_key:"",menu_type:"M",update_time:"2023-06-13 10:24:44",create_time:"2023-05-29 14:35:16"},
        {id:"123",parent_id:"122",title:"上传文件",icon:"zip",no_cache:1,meta:"{}",path:"/file",hidden:0,redirect:"",always_show:0,name:"File",layout:0,parent_view:0,component:"components/file",sort:0,alone:0,role_key:"",menu_type:"C",update_time:"2023-06-13 10:24:44",create_time:"2023-05-30 15:13:26"},
        {id:"124",parent_id:"0",title:"我的信息",icon:"user",no_cache:1,meta:"{}",path:"/info",hidden:0,redirect:"",always_show:0,name:"Info",layout:1,parent_view:0,component:"admin/info",sort:10,alone:0,role_key:"www1",menu_type:"C",update_time:"2023-06-15 14:37:57",create_time:"2023-05-31 15:09:24"},
        {id:"125",parent_id:"0",title:"富文本编辑",icon:"form",no_cache:1,meta:"{}",path:"/ditor",hidden:0,redirect:"",always_show:0,name:"Ditor",layout:1,parent_view:0,component:"components/ditor",sort:1,alone:0,role_key:"",menu_type:"C",update_time:"2023-06-15 14:38:54",create_time:"2023-06-02 10:00:59"},
        {id:"128",parent_id:"0",title:"大屏展示",icon:"chart",no_cache:1,meta:"{}",path:"/echart",hidden:0,redirect:"",always_show:0,name:"Echart",layout:1,parent_view:0,component:"components/echart",sort:0,alone:0,role_key:"",menu_type:"C",update_time:"2023-06-13 10:24:44",create_time:"2023-06-13 10:24:44"}
        ])
        .execute();
      return {
        data: null,
        message: "插入成功",
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
  }
}
