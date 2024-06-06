import { ApiPropertyOptional} from '@nestjs/swagger';

// 登录接口
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
 