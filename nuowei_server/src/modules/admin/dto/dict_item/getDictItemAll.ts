import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class GetDictItemAllReq {
  @IsNotEmpty({ message: 'dictId必填' })
  @ApiProperty({ description: '关联的字典归属id',example: "1",required: true  })
  readonly dictId: string;
}