import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
import {AddRolesReq} from "./addRoles";
// 请求
export class UpRolesReq extends AddRolesReq{
  @IsNotEmpty({ message: 'id必填' })
  @ApiProperty({ description: 'id',example: "",required: true  })
  readonly id: string;

}
