import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class AddDictItemReq {
  @IsNotEmpty({ message: 'dictId必填' })
  @ApiProperty({ description: '关联的字典归属id',example: "1",required: true  })
  readonly dictId: string;
  @IsNotEmpty({ message: 'dictClass必填' })
  @ApiProperty({ description: '回显样式',example: "1",required: true  })
  readonly dictClass: string;
  @IsNotEmpty({ message: 'status必填' })
  @ApiProperty({ description: '状态',example: "1",required: true  })
  readonly status: number;
  @IsNotEmpty({ message: 'dictSort必填' })
  @ApiProperty({ description: '排序',example: "1",required: true  })
  readonly dictSort: number;
  @IsNotEmpty({ message: 'dictLabel必填' })
  @ApiProperty({ description: '数据标签',example: "1",required: true  })
  readonly dictLabel: string;
  @IsNotEmpty({ message: 'dictValue必填' })
  @ApiProperty({ description: '数据键值',example: "1",required: true  })
  readonly dictValue: string;
  @IsOptional()
  @ApiPropertyOptional({ description: '备注',example: "1", })
  readonly remark: string;

}
