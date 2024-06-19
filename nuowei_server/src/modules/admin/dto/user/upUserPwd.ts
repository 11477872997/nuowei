import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class UpUserPwdReq {
  @IsNotEmpty({ message: 'id必填' })
  @ApiProperty({ description: 'id',example: "",required: true  })
  readonly id: string;
  @IsNotEmpty({ message: 'pwd必填' })
  @ApiProperty({ description: '密码',example: "",required: true  })
  readonly pwd: string;
}
