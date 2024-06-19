import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
// 请求
export class UpUserPwdInfoReq {
  @IsNotEmpty({ message: '密码必填' })
  @ApiProperty({ description: '密码',example: "",required: true  })
  readonly pwd: string;

}
