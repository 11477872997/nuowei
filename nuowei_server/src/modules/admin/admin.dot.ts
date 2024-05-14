import { IsNotEmpty} from 'class-validator';
import { ApiProperty} from '@nestjs/swagger';
// ApiProperty 必填
// ApiPropertyOptional 不是必填
export class CreatePostDto {
  @IsNotEmpty({ message: '用户名必填' })
  @ApiProperty({ description: '用户名' })
  readonly username: string;
}