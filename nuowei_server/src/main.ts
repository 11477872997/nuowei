import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { disposition} from '@config/index';
import { HttpExceptionFilter,TransformInterceptor } from "@utils/interface";
// swagger 文件插件
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path'
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
   // 全局注册验证
   app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }));
  // 全局注册异常过滤器拦截
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册响应拦截
  app.useGlobalInterceptors(new TransformInterceptor())
  // 设置全局路由前缀
  app.setGlobalPrefix('nouwei');
  // 配置静态目录
  app.useStaticAssets(join(__dirname, '../src/', 'public'),{
    prefix: '/static/', //设置虚拟路径
  }) // http://localhost:5000/static/xxx.txt

  // 设置swagger文档
  const config = new DocumentBuilder()
  .setTitle('nuowei开源系统')   
  .setDescription('nest.js + vue 后台管理系统接口文档')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(disposition.host);
  const cars = [
    {
      '参数': '启动端口',
      "说明": disposition.host,
    },
    {
      "参数": '本地地址',
      "说明": `localhost:${disposition.host}`,
    },
    {
      "参数": '接口文档地址',
      "说明": `localhost:${disposition.host}/docs`,
    }
  ];
  console.table(cars);
}
bootstrap();
