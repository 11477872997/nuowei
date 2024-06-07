import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { AppDataSource } from "@config/dp";
@Injectable()
export class GetMoreAll {

  async getMoreAll(): Promise<object> {
    try {
    let query = `
     SELECT id,name,remark FROM more
  `;
    const results = await AppDataSource.query(query);
      return {
        code:0,
        message:'请求成功',
        data:results,
        total:results.length
      }
       
    } catch (error) {
        console.log('error',error);
        
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
      return error;
    }
     }
}