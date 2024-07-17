import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseTransformInterceptor } from './interceptors/response.interceptors';
import { HttpExceptionFilter } from './exception/exception-filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api')
  app.enableVersioning({
    prefix: 'v',
    defaultVersion: '1',
    type: VersioningType.URI
  })
  // 全局管道 验证参数
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true,
      forbidUnknownValues: true
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter())
  // 全局拦截器处理返回给客户端的数据
  app.useGlobalInterceptors(new ResponseTransformInterceptor())
  await app.listen(3000);
}
bootstrap();
