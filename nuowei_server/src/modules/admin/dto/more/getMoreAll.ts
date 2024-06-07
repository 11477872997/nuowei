import { ApiPropertyOptional,ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty} from 'class-validator';

// 响应
export class GetMoreAllRes {
    @ApiPropertyOptional({ description: 'id'})
    id: string
    @ApiPropertyOptional({ description: '账号名称'})
    name: string
    @ApiPropertyOptional({ description: '备注'})
    remark: string
    @ApiPropertyOptional({ description: '更新时间'})
    updateTime: string
 
  }
