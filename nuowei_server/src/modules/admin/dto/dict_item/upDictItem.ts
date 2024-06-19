import { ApiPropertyOptional,ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty,IsOptional} from 'class-validator';
import {AddDictItemReq} from './addDictItem'
// 请求
  export class  UpDictItemReq extends AddDictItemReq {
    @IsNotEmpty({ message: 'id必填' })
    @ApiProperty({ description: 'id',example: "1",required: true  })
    readonly id: number;
  
  }