import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import * as utils from '@utils/index';
@Injectable()
export class GetRouter {
 
  async setRouter(req): Promise<object> {
    try {
    const {name,pwd,uid} = req.user;
    let list:any  = await utils.getRouter(req,true);
    function bianpinghua(list){
        let arr=[];
        list.map(t=>{
            if(t.children&&t.children.length) arr.push(...bianpinghua(t.children))
            arr.push({...t,layout:1,path:"/"+Math.random(),children: [{...t,layout:0, alone:1, children:undefined}],hidden:1});
        })
        return arr
    }
    list.routerArr = bianpinghua(list.routerArr);
    list.routerArr  = list.routerArr .filter((obj, index, self) => index === self.findIndex((t) => (t.id === obj.id)));
    let arr = list.routerMenu.concat(list.routerArr)
        return {
            data: {
                routerMenu:arr
            },
            message: "请求成功",
        }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}
