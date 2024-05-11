import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { Dict } from "@entity/dict";
// import { DictItem } from "@entity/dict_item.entity";
// import { More } from "@entity/more.entity";
// import { Roles } from "@entity/roles.entity";
// import { RouterMenu } from "@entity/router_menu.entity";
// import { Tests } from "@entity/tests.entity";
// import { Theme } from "@entity/theme.entity";
@Injectable()
export class RegistryService {

  setAuth(body):string{
        // const {username,password} =  body;
        // const db = this.getUserInfoReaposintoty.createQueryBuilder('dict');
        // const res = this.verifyTheUserAndPassword(username,password,db);
        return body;

    }
  
}
