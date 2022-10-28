import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { users } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { UpdateUserDTO } from "./dto/uptadeUser.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data): Promise<users> {
    const { name, email, password } = data;
    const user = await this.prisma.users.create({
      data: {
        name,
        email,
        password
      }
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: "Erro ao criar usuário!",
        },
        HttpStatus.FORBIDDEN,
      );
    }

    return user;
  }

  async findAll(): Promise<string> {
    return "Lista de usuários!";
  }

  async findOne(id: number): Promise<string> {
    return `Usuário ${id}!`;
  }

  async update(id: number, req: UpdateUserDTO): Promise<string> {
    return `Usuário ${id} atualizado com sucesso!`;
  }
}
