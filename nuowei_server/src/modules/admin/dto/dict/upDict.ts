import { ApiPropertyOptional,ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty,IsOptional} from 'class-validator';
import {AddDictReq} from './addDict'
// 请求
  export class  UpDictReq extends AddDictReq {
    @IsNotEmpty({ message: 'id必填' })
    @ApiProperty({ description: 'id',example: "1",required: true  })
    readonly id: number;
  
  }