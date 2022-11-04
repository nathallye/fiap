import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/uptadeUser.dto';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // criar
  // POST http://localhost:3000/users
  @Post()
  create(@Body() req:CreateUserDTO) { // DTO - Data Transfer Object - Design Pattern - É uma garantia que a operação está protegida - Diferente do type que é por entidade(ex.: entidade users) o DTO é por operação
    return this.usersService.create(req);
  }

  // listar todos
  // GET http://localhost:3000/users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // GET http://localhost:3000/users/1
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // atualizar
  // O PUT, é usado para alteração de um dado completo
  // O PATCH é usado para atualização parcial.
  // PATCH http://localhost:3000/users/1
  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() req: UpdateUserDTO) {
    return this.usersService.update(id, req);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number)  {
    return this.usersService.remove(id);
  }
}
