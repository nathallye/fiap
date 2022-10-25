import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// arquivo de inicialização, cria a aplicaçaõ com base no módulo
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
