import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
import {GetRouterReq} from "./getRouter";
// ApiProperty 必填
// ApiPropertyOptional 不是必填
// 登录
export class DelMenuReq  {
  @IsNotEmpty({ message: 'id必填' })
  @ApiProperty({ description: '当前列表id',example: "",required: true  })
  readonly id: string;

}
