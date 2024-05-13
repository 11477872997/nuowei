import { IsNotEmpty} from 'class-validator';
// ApiProperty 必填
// ApiPropertyOptional 不是必填
export class Addbusiness {
  @IsNotEmpty({ message: '用户名必填' })
  readonly username: string;
}