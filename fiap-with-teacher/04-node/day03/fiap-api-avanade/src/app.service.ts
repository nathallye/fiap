import { Injectable } from '@nestjs/common';

// nele executamos aquilo que realmente precisamos
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getLogin(): string {
    return 'Aqui virá o login do usuário!';
  }
  getRegister(): string {
    return 'Aqui virá o cadastro do usuário!';
  }
}
