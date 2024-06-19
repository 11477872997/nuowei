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


@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((res) => {
        let request = context.switchToHttp().getRequest();
        let interfaceData = {
          ...res,
          time: new Date().getTime(),
          success: true,
          status: 200,
        }
        let LoggerData = {
          originalUrl: request.originalUrl,
          method: request.originalUrl,
          ip: request.ip,
          params: request.params,
          query: request.query,
          body: request.body,
          ...interfaceData,
        };
        Logger.access(LoggerData);
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
    let interfaceData = {
      code: -1,
      time: new Date().getTime(),
      success: false,
      status: status,
      message:utils.codeStatus(status)
    }
    const errorLogger = {
      originalUrl: request.originalUrl,
      method: request.originalUrl,
      ip: request.ip,
      params: request.params,
      query: request.query,
      body: request.body,
      ...interfaceData
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
