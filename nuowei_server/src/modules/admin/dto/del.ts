import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
// 请求
export class delReq  {
  @IsNotEmpty({ message: 'id必填' })
  @ApiProperty({ description: '当前列表id',example: "",required: true  })
  readonly id: string;

}
