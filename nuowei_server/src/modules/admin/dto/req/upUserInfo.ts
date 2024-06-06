import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
// ApiProperty 必填
// 登录
export class UpUserInfoReq {
  @IsNotEmpty({ message: '密码必填' })
  @ApiProperty({ description: '密码',example: "" ,required: true })
  readonly pwd: string;
  @IsNotEmpty({ message: '用户名必填' })
  @ApiProperty({ description: '用户名必填',example: "",required: true  })
  readonly name: string;
  @IsOptional()
  @ApiProperty({ description: '用户头像',example: "",required: true  })
  readonly url: string;

}
