import { Controller ,Get} from '@nestjs/common';
import { RegistryService } from './registry.service';
@Controller('registry')
export class RegistryController {
    constructor(private readonly registryService: RegistryService) {}

    @Get()
    getHello(): string {
        return this.registryService.getHello();
    }
}
