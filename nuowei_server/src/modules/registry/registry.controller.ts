import { Controller,Get} from '@nestjs/common';
import { ApiTags,ApiOperation } from '@nestjs/swagger';
import { RegistryService } from './registry.service';
@ApiTags("基础接口")
@Controller('registry')
export class RegistryController {
    constructor(private readonly registryService: RegistryService) {}
    @ApiOperation({ summary: '插入系统默认初始化数据' })
    @Get()
    async setAuth(){
        return this.registryService.setAuth();
    }
}
