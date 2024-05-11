import { Controller,Post,Body} from '@nestjs/common';
import { RegistryService } from './registry.service';
@Controller('registry')
export class RegistryController {
    constructor(private readonly registryService: RegistryService) {}

    @Post()
    async setAuth(@Body() body){
        return this.registryService.setAuth(body);
    }
}
