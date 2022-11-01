import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { users } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdateUserDTO } from "./dto/uptadeUser.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async verifyUserExists(email: string): Promise<boolean> { // método para verificar se o usuário existe
    const user = await this.prisma.users.findUnique({
      where: {
        email: email
      }
    });
    return user ? true : false;
  }

  async create(data: CreateUserDTO): Promise<users> {
    // temos dois problemas aqui
    // 1º o email não está sendo verificado se já existe no banco de dados
    // 2° a senha está em formato clear text

    // as restrições em banco de dados impedem redundâncias e anomailias
    // chave primária - impede duplicidade, e obriga o preenchimento, além de ser um índice físico(clustered index)

    // busca para saber se o usuário já existe
    // findUnique é um método do prisma que busca um usuário pelo campo único por exemplo email
    // findFirst é um método do prisma que busca o primeiro registro que encontrar - quando não temos chave primária - mais pesado - porque ele carrega a tabela toda
    const { name, email, password } = data;
    const checkUser = await this.verifyUserExists(email);
    let user = undefined;

    if (!checkUser) {
      user = await this.prisma.users.create({
        data: {
          name,
          email,
          password
        }
      });
    }

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

  async findAll(): Promise<users[]> {
    return await this.prisma.users.findMany();
  }

  async findOne(id: number): Promise<users> {
    return await this.prisma.users.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, req: UpdateUserDTO): Promise<string> {
    return `Usuário ${id} atualizado com sucesso!`;
  }
}
