import { Controller,Get} from '@nestjs/common';
import { RegistryService } from './registry.service';
import { Addbusiness } from "./registyr.dot";
@Controller('registry')
@Controller('addbusiness')
export class RegistryController {
    constructor(private readonly registryService: RegistryService) {}

    @Get()
    async setAuth(){
        return this.registryService.setAuth();
    }
}
