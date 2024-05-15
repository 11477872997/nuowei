import { ApiPropertyOptional} from '@nestjs/swagger';
export class ResInfo {
    @ApiPropertyOptional({ description: '用户名'})
    name: string
 
  }
