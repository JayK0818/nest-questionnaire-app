import { Injectable, NestInterceptor, BadGatewayException, ExecutionContext, CallHandler } from '@nestjs/common'
import type { Observable } from 'rxjs'
import { map } from 'rxjs'
import { SUCCESS_CODE, ERROR_CODE } from '../constants/index'
import { catchError } from 'rxjs/operators'

interface Response<T> {
  data: T
  code?: number
  message: string
}

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        code: SUCCESS_CODE,
        message: 'success',
      })),
      catchError((error) => {
        throw new BadGatewayException({
          code: ERROR_CODE,
          data: null,
          message: error?.response?.message
        });
      }),
    );
  }
}