import { Module } from '@nestjs/common';
import { RegistryModule } from './modules/registry/registry.module';
import { AdminModule } from './modules/admin/admin.module';
@Module({
  imports: [
     RegistryModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
