import { Controller,Get,UseGuards} from '@nestjs/common';
import { ApiTags,ApiOperation,ApiBearerAuth } from '@nestjs/swagger';
import { RegistryService } from './registry.service';
import { AuthGuard } from '@nestjs/passport';
@ApiTags("基础接口")
@Controller('registry')
@ApiBearerAuth()
export class RegistryController {
    constructor(private readonly registryService: RegistryService) {}
    @ApiOperation({ summary: '插入系统默认初始化数据' })
    @UseGuards( AuthGuard('jwt'))
    @Get()
    async setAuth(){
        return this.registryService.setAuth();
    }
}
