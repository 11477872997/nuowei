import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class GetUserReq {
  @IsNotEmpty({ message: 'page必填' })
  @ApiProperty({ description: '当前第几页',example: "1",required: true  })
  readonly page: number;
  @IsNotEmpty({ message: 'size必填' })
  @ApiProperty({ description: '每页多少条数',example: "10",required: true  })
  readonly size: number;
  @IsOptional()
  @ApiPropertyOptional({ description: '用户名称',example: "1", })
  readonly name: string;

}
