import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
import {GetRouterReq} from "./getRouter";
// 请求
export class ChangeMenuReq extends GetRouterReq{
  @IsNotEmpty({ message: 'id必填' })
  @ApiProperty({ description: 'id',example: "",required: true  })
  readonly id: string;

}
