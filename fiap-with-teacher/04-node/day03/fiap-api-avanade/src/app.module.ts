import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// É como se fosse uma pasta, ele que guarda os arquivos `controller` e `service/providers`. Ele agrupa os controles/`controllers` e serviços/`services`;
@Module({
  imports: [],
  controllers: [AppController], // os controllers direcionam a requisição
  providers: [AppService], // os services executamos aquilo que realmente precisamos
})
export class AppModule {}
