import { ApiPropertyOptional} from '@nestjs/swagger';

// 响应
export class GetDictAllRes {
    @ApiPropertyOptional({ description: 'id'})
    id: string
    @ApiPropertyOptional({ description: '字典名称'})
    name: string
    @ApiPropertyOptional({ description: '字典类型'})
    type: string
    @ApiPropertyOptional({ description: '备注'})
    remark: string
    @ApiPropertyOptional({ description: '更新时间'})
    updateTime: string
 
  }
