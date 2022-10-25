import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller("/users")
// se o controller estiver vazio significa que ele está pegando na pasta raiz, ou seja, a rota é http://localhost:3000
@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {} // construtor executa quando a aplicão é incializada

  @Get()
  getHello(): string {
    // está apenas redirecionando o usuário para o serviço correto
    return this.appService.getHello();
  }

  /*
  @Get("/login") // rotas
  getLogin(): string {
    return this.appService.getLogin();
  }

  @Get("/register")
  getRegister(): string {
    return this.appService.getRegister();
  }
  */
}
