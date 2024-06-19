import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';

// 请求
export class QueryReq {
  @IsOptional()
  @ApiPropertyOptional({ description: 'name查询字段',example: "", })
  readonly name: string;

}

