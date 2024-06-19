import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class AddDictReq {
  @IsNotEmpty({ message: 'type必填' })
  @ApiProperty({ description: '字典类型',example: "",required: true  })
  readonly type: string;
  @IsNotEmpty({ message: 'name必填' })
  @ApiProperty({ description: '字典名称',example: "1",required: true  })
  readonly name: number;
  @IsOptional()
  @ApiPropertyOptional({ description: '备注',example: "1", })
  readonly remark: string;

}

