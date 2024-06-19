import { ApiPropertyOptional,ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty,IsOptional} from 'class-validator';
import {AddMoreReq} from './addMore'
// 请求
  export class  UpMoreReq extends AddMoreReq {
    @IsNotEmpty({ message: 'name必填' })
    @ApiProperty({ description: '账号名称',example: "1",required: true  })
    readonly name: number;
    @IsOptional()
    @ApiPropertyOptional({ description: '备注',example: "1", })
    readonly remark: string;
  
  }