import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseTransformInterceptor } from './interceptors/response.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      stopAtFirstError: true
    }),
  );
  app.useGlobalInterceptors(new ResponseTransformInterceptor());
  await app.listen(3000);
}
bootstrap();
