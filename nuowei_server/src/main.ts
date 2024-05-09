import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { disposition} from './config';
import { HttpExceptionFilter,TransformInterceptor } from "./utils/interface";
async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  //全局错接口误统一返回
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局200 接口统-返回
  app.useGlobalInterceptors(new TransformInterceptor())
  // 设置全局路由前缀
  app.setGlobalPrefix('api');
  await app.listen(disposition.host);
}
bootstrap();
