import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class GetMoreReq {
  @IsNotEmpty({ message: 'page必填' })
  @ApiProperty({ description: '当前第几页',example: "1",required: true  })
  readonly page: number;
  @IsNotEmpty({ message: 'size必填' })
  @ApiProperty({ description: '每页多少条数',example: "10",required: true  })
  readonly size: number;
  @IsOptional()
  @ApiPropertyOptional({ description: '角色名称',example: "1", })
  readonly name: string;

}

// 相应
export class GetMoreRes {
  @ApiPropertyOptional({ description: '编号'})
  id: string
  @ApiPropertyOptional({ description: '账号名称'})
  name: string
  @ApiPropertyOptional({ description: '备注'})
  remark: string
  @ApiPropertyOptional({ description: '更新时间'})
  updateTime: string
  @ApiPropertyOptional({ description: '创建时间'})
  createTime: string

}
