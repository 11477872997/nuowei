import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Logger } from '@utils/log';
import * as utils from './index';
import { map, Observable } from 'rxjs';

interface InterfaceTypes {
  data: any; // 接口对象
  message: string; // 消息提示
  success: boolean; // true 正常  false 错误
  status: number; //请求状态码
  time: number; // 当前时间戳
  code: number; // 0 正常 -1 错误
}
// 接口返回格式定义
let interfaceData: InterfaceTypes = {
  data: null,
  message: '请求成功',
  code: 0,
  time: new Date().getTime(),
  success: true,
  status: 200,
};

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res) => {
        let request = context.switchToHttp().getRequest();
        let LoggerData = {
          originalUrl: request.originalUrl,
          method: request.originalUrl,
          ip: request.ip,
          params: request.params,
          query: request.query,
          body: request.body,
          data:res.data,
          code: 0,
          message: res.message?res.message:'请求成功',
          status: 200,
          time: new Date().getTime(),
          success: true,
        };
        Logger.access(LoggerData);
        interfaceData.data = res.data?res.data:res;
        interfaceData.message = res.message?res.message:'请求成功';
        return interfaceData;
      }),
    );
  }
}
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 获取请求上下文
    const response = ctx.getResponse(); // 获取请求上下文中的 response对象
    const request = ctx.getRequest(); // 在请求上下文中获取 request 对象
    const status = exception.getStatus(); // 获取异常状态码
     // 设置错误信息
     const message = exception['response'].message
     ? exception['response'].message
     : `${status >= 500 ? utils.codeStatus(status) : utils.codeStatus(status)}`;
    interfaceData.code = -1;
    interfaceData.time = new Date().getTime();
    interfaceData.status = status;
    interfaceData.data = null;
    interfaceData.message = message
    const errorLogger = {
      originalUrl: request.originalUrl,
      method: request.originalUrl,
      ip: request.ip,
      params: request.params,
      query: request.query,
      body: request.body,
      data: null,
      message: exception,
      code: -1,
      time: new Date().getTime(),
      success: false,
      status: status,
    };
    // 记录错误日志
    if (status >= 500) {
      Logger.error(errorLogger);
    } else if (status >= 400) {
      Logger.warn(errorLogger);
    }
    // 设置返回的状态码， 请求头，发送错误信息
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(interfaceData);
  }
}
