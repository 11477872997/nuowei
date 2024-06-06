import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
// ApiProperty 必填
// ApiPropertyOptional 不是必填
// 登录
export class LoginReq {
  @IsNotEmpty({ message: '用户名必填' })
  @ApiProperty({ description: '用户名',example: "admin" ,required: true })
  readonly name: string;
  @IsNotEmpty({ message: '密码必填' })
  @ApiProperty({ description: '密码',example: "63f6deb737ab85677d6f11beea14a08b",required: true  })
  readonly pwd: string;

}
