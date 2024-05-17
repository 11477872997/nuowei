import { Module } from '@nestjs/common';
import { JwtStrategy} from '@config/jwt';
import { RegistryService } from './registry.service';
import { RegistryController } from './registry.controller';
@Module({
  providers: [RegistryService,JwtStrategy],
  controllers: [RegistryController]
})
export class RegistryModule {}

