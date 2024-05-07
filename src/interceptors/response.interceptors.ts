import { Injectable, NestInterceptor, BadGatewayException, ExecutionContext, CallHandler } from '@nestjs/common'
import type { Observable } from 'rxjs'
import { map } from 'rxjs'
import { catchError } from 'rxjs/operators'

interface Response<T> {
  data: T;
  code?: number;
  msg: string;
}

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data: data ? data : null,
        code: 200,
        msg: 'success',
      })),
      catchError((error) => {
        throw new BadGatewayException(error?.message);
      })
    )
  }
}