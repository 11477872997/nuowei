import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import * as sqlMoudes from "@utils/sql";
import { AppDataSource } from "@config/dp";
import * as utils from '@utils/index';
@Injectable()
export class GetRouterSystem {

  async getRouterSystem(req,body): Promise<object> {
    try {
      let res  = await utils.getUserRole(req) as any;
      if(res.code != -1){
        return {
         
        }
      }else{
        return res
      }
       
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}