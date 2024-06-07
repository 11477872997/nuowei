import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
// 请求
export class AddRolesReq  {
  @IsNotEmpty({ message: 'name必填' })
  @ApiProperty({ description: '角色名称',example: "",required: true  })
  readonly name: string;
  @IsNotEmpty({ message: 'roleKey必填' })
  @ApiProperty({ description: '权限字符',example: "",required: true  })
  readonly roleKey: string;
  @IsNotEmpty({ message: 'roles必填' })
  @ApiProperty({ description: '菜单权限逗号隔开',example: "",required: true  })
  readonly roles: string;

}
