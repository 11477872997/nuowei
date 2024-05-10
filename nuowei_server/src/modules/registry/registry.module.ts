import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dict } from "@entity/dict.entity";
import { DictItem } from "@entity/dict_item.entity";
import { More } from "@entity/more.entity";
import { Roles } from "@entity/roles.entity";
import { RouterMenu } from "@entity/router_menu.entity";
import { Tests } from "@entity/tests.entity";
import { Theme } from "@entity/theme.entity";
// 表结构自动生成
@Module({
  imports:[TypeOrmModule.forFeature([
    Dict,DictItem,More,Roles,RouterMenu,Tests,Theme
  ])]
})
export class RegistryModule {}

