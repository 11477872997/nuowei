import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
import {AddRolesReq} from "./addRoles";
// ApiProperty 必填
// ApiPropertyOptional 不是必填
// 登录
export class upRolesReq extends AddRolesReq{
  @IsNotEmpty({ message: 'id必填' })
  @ApiProperty({ description: 'id',example: "",required: true  })
  readonly id: string;

}
