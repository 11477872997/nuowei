import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dict } from "@entity/dict.entity";
import { DictItem } from "@entity/dict_item.entity";
import { More } from "@entity/more.entity";
import { Roles } from "@entity/roles.entity";
import { RouterMenu } from "@entity/router_menu.entity";
// 表结构自动生成
@Module({
  imports:[TypeOrmModule.forFeature([
    Dict,DictItem,More,Roles,RouterMenu
  ])]
})
export class RegistryModule {}

