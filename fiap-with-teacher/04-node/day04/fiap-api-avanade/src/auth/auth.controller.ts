import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// http://localhost:3000/auth
@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {} // injeção dentro do auth.controller

// http://localhost:3000/auth/login
// Uma REST API trabalha com verbos HTTP, e cada verbo representa uma ação
// GET - Todos
// GET - 1
// POST - Cadastro
// PUT/PATCH - alteração
// Delete - Exclusão
  @Post("login")
  async authLogin(@Body() req) {
    const { login, password } = req;
    console.log("Login ", login);
    console.log("Senha ", password);
    return this.authService.authLogin(login, password);
  }

}
