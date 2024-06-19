import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class GetDictItemReq {
  @IsNotEmpty({ message: 'dictId必填' })
  @ApiProperty({ description: '关联的字典归属id',example: "1",required: true  })
  readonly dictId: string;
  @IsNotEmpty({ message: 'page必填' })
  @ApiProperty({ description: '当前第几页',example: "1",required: true  })
  readonly page: number;
  @IsNotEmpty({ message: 'size必填' })
  @ApiProperty({ description: '每页多少条数',example: "10",required: true  })
  readonly size: number;
  @IsOptional()
  @ApiPropertyOptional({ description: '字典名称',example: "1", })
  readonly name: string;

}

// 相应
export class GetDictItemRes {
    @ApiPropertyOptional({ description: 'id'})
    id: string
    @ApiPropertyOptional({ description: '回显样式'})
    dictClass: string
    @ApiPropertyOptional({ description: '字典父级id'})
    dictId: string
    @ApiPropertyOptional({ description: '标签'})
    dictLabel: string
    @ApiPropertyOptional({ description: '排序'})
    dictSort: string
    @ApiPropertyOptional({ description: '数据键值'})
    dictValue: string
    @ApiPropertyOptional({ description: '备注'})
    remark: string
    @ApiPropertyOptional({ description: '状态：1:启用,2:禁用'})
    status: number
    @ApiPropertyOptional({ description: '字典类型'})
    type: string
    @ApiPropertyOptional({ description: '更新时间'})
    updateTime: string
    @ApiPropertyOptional({ description: '创建时间'})
    create_time: string

}
