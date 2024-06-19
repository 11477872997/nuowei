import { IsNotEmpty,IsOptional} from 'class-validator';
import { ApiProperty,ApiPropertyOptional} from '@nestjs/swagger';
import {DelReq} from '../del'
// 请求
export class UpThemeReq extends DelReq {
  @IsNotEmpty({ message: 'menuBg必填' })
  @ApiProperty({ description: '默认背景',required: true })
  menuBg: string
  @IsNotEmpty({ message: 'menuSubBgg必填' })
  @ApiProperty({ description: '展开背景',required: true })
  menuSubBg: string
  @IsNotEmpty({ message: 'menuText必填' })
  @ApiProperty({ description: '默认文字',required: true })
  menuText: string
  @IsNotEmpty({ message: 'menuActiveText必填' })
  @ApiProperty({ description: '选中文字',required: true })
  menuActiveText: string
  @IsNotEmpty({ message: 'menuSubActiveText必填' })
  @ApiProperty({ description: '当前选中展开文字',required: true })
  menuSubActiveText: string
  @IsNotEmpty({ message: 'menuHoverBgg必填' })
  @ApiProperty({ description: 'hover背景',required: true })
  menuHoverBg: string

}
