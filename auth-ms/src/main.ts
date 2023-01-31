import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptorService } from './common/interceptors/response/response.interceptor.service';
import { ErrorInterceptorService  } from './common/interceptors/error/error.interceptor.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform:true}));
  app.useGlobalInterceptors(new ResponseInterceptorService());
  app.useGlobalInterceptors(new ErrorInterceptorService());

  await app.listen(3000);
}
bootstrap();
