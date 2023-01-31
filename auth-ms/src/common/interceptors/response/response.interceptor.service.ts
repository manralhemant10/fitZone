import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptorService implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map(resObj=>{
        const {statusCode, message,...data}=resObj
        return {
            "result":{
              statusCode,
              message
            },
            "data":data
        }
      }));
  }
}