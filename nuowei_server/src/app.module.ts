import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistryModule } from './modules/registry/registry.module';
import { AdminModule } from './modules/admin/admin.module';
@Module({
  imports: [ RegistryModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
