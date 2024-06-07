import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class GetRolesReq {
  @IsNotEmpty({ message: 'page必填' })
  @ApiProperty({ description: '当前第几页',example: "1",required: true  })
  readonly page: number;
  @IsNotEmpty({ message: 'size必填' })
  @ApiProperty({ description: '每页多少条数',example: "10",required: true  })
  readonly size: number;
  @IsOptional()
  @ApiPropertyOptional({ description: '角色名称',example: "1", })
  readonly name: string;

}

// 相应
export class GetRolesRes {
  @ApiPropertyOptional({ description: '编号'})
  id: string
  @ApiPropertyOptional({ description: '名称'})
  name: string
  @ApiPropertyOptional({ description: '权限标识'})
  roles: string
  @ApiPropertyOptional({ description: '权限默认选中标识'})
  checkedRoles: string
  @ApiPropertyOptional({ description: '权限字符'})
  roleKey: string
  @ApiPropertyOptional({ description: '更新时间'})
  updateTime: string
  @ApiPropertyOptional({ description: '创建时间'})
  createTime: string

}
