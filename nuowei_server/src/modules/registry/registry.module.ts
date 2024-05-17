import { Module } from '@nestjs/common';
// import { JwtStrategy} from '@config/jwt';
import { RegistryService } from './registry.service';
import { RegistryController } from './registry.controller';
@Module({
  providers: [RegistryService],
  controllers: [RegistryController]
})
export class RegistryModule {}

