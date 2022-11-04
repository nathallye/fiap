import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';

// arquivo de inicialização, cria a aplicação com base no módulo
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // para habilitar o cors
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
