import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '@config/dp';
@Injectable()
export class GetDictItem {
  async getDictItemList(req, body): Promise<object> {
    try {
        let query = `
        SELECT
            a.id AS id,
            dict_id AS dictId,
            dict_label AS dictLabel,
            dict_value AS dictValue,
            dict_sort AS dictSort,
            dict_class AS dictClass,
            status,
            DATE_FORMAT(a.update_time, '%Y-%m-%d %H:%i:%s') AS updateTime,
            DATE_FORMAT(a.create_time, '%Y-%m-%d %H:%i:%s') AS createTime,
            a.remark AS remark,
            type FROM dict_item AS a 
                LEFT JOIN dict b ON a.dict_id = b.id 
            WHERE 
            dict_id = '${body.dictId}' 
            ORDER BY 
            dict_sort ASC, 
            a.update_time DESC
    `;
        if (body.name) {
          (query += 'name LIKE :name'), { name: `%${body.name}%` };
        }
        query += `LIMIT ${body.size} OFFSET ${(body.page - 1) * body.size} `;
        const results = await AppDataSource.query(query);
      return {
        code: 0,
        message: '请求成功',
        data: results,
        total: results.length,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
