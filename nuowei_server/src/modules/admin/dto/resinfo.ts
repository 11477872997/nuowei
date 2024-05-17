import { ApiPropertyOptional} from '@nestjs/swagger';
export class LoginRes {
    @ApiPropertyOptional({ description: '用户名'})
    name: string
    @ApiPropertyOptional({ description: '用户id'})
    uid: string
    @ApiPropertyOptional({ description: '1:管理员,0:普通'})
    admin: number
    @ApiPropertyOptional({ description: '接口验证'})
    token: string
 
  }
