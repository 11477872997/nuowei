import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class AddMoreReq {
  @IsNotEmpty({ message: 'id必填' })
  @ApiProperty({ description: '当前列表id',example: "",required: true  })
  readonly id: string;
  @IsNotEmpty({ message: 'name必填' })
  @ApiProperty({ description: '账号名称',example: "1",required: true  })
  readonly name: number;
  @IsOptional()
  @ApiPropertyOptional({ description: '备注',example: "1", })
  readonly remark: string;

}

