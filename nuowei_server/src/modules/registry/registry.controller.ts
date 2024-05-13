import { Controller,Get,UseFilters} from '@nestjs/common';
import { RegistryService } from './registry.service';
@Controller('registry')
export class RegistryController {
    constructor(private readonly registryService: RegistryService) {}

    @Get()
    async setAuth(){
        return this.registryService.setAuth();
    }
}
