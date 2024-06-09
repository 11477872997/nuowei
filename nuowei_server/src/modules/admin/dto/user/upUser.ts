import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
// 请求
export class UpUserReq {
  @IsNotEmpty({ message: 'id必填' })
  @ApiProperty({ description: 'id',example: "",required: true  })
  readonly id: string;
  @IsOptional()
  @ApiPropertyOptional({ description: '选中文字',example: "", })
  readonly menuActiveText: string;
  @IsOptional()
  @ApiPropertyOptional({ description: '默认背景',example: "", })
  readonly menuBg: string;
  @IsOptional()
  @ApiPropertyOptional({ description: 'hover背景',example: "", })
  readonly menuHoverBg: string;
  @IsOptional()
  @ApiPropertyOptional({ description: '当前选中展开文字',example: "", })
  readonly menuSubActiveText: string;
  @IsOptional()
  @ApiPropertyOptional({ description: '展开背景',example: "", })
  readonly menuSubBg: string;
  @IsOptional()
  @ApiPropertyOptional({ description: '默认文字',example: "", })
  readonly menuText: string;
  @IsNotEmpty({ message: 'moreId必填' })
  @ApiProperty({ description: '账号归属',example: "",required: true  })
  readonly moreId: string;
  @IsNotEmpty({ message: 'name必填' })
  @ApiProperty({ description: '用户名',example: "",required: true  })
  readonly name: string;
  @IsNotEmpty({ message: 'rolesId必填' })
  @ApiProperty({ description: '角色选择，逗号隔开',example: "",required: true  })
  readonly rolesId: string;
  @IsOptional()
  @ApiPropertyOptional({ description: '用户状态,1正常,0禁用',example: "",required: true  })
  readonly status: number;
  @IsOptional()
  @ApiPropertyOptional({ description: '用户头像',example: "", })
  readonly url: string;
  @IsOptional()
  @ApiPropertyOptional({ description: '备注',example: "", })
  readonly remark: string;

}
