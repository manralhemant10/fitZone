import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptorService implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError((err)=>{
            return throwError(()=> new HttpException({
                result:{
                    statusCode:400,
                    message: err.message
                }
              },400, {
                cause: err.message
              }))
        })
       );
  }
}