import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { disposition} from '@config/index';
const os = require('node:os'); 
import { HttpExceptionFilter,TransformInterceptor } from "@utils/interface";
import { ValidationPipe } from '@nestjs/common';

//一件生成模块文件夹 在npm run start:dev 环境 不然会多次引入server 文件 ，要手动删除 
// import { creacAFiletName} from './utils/createAFile'
// creacAFiletName('registry')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  app.setGlobalPrefix('api');
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
      "参数": 'ip地址',
      "说明": `${os.networkInterfaces().WLAN[1].address}:${disposition.host}`,
    }
  ];
  console.table(cars);
}
bootstrap();
