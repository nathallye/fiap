import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { users } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdateUserDTO } from "./dto/uptadeUser.dto";
import * as bcrypt from "bcrypt";
import { EmailService } from "../email/email.service";

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService
  ) {}

  async getUserById(id: string): Promise<users> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async verifyUserExists(email: string): Promise<boolean> { // método para verificar se o usuário existe
    const user = await this.prisma.users.findUnique({
      where: {
        email: email
      }
    });
    return user ? true : false;
  }

  async crypto(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
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
          password: await this.crypto(password)
        }
      });
      // enviando e-mail
      if (await this.emailService.sendEmail(email, `Bem vindo ao sistema ${name}`, `${name}, você se cadastrou no site FIAP Avanade confirme seu acesso no link abaixo: ...`, {})) {
        console.log("E-mail enviado com sucesso!");
      }
    }

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: "Erro ao criar usuário!",
        },
        HttpStatus.FORBIDDEN
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

  async update(id: string, req) {
    //carregue os dados do usuário cujo id foi informado.
    const user = await this.getUserById(id);
    //extraindo as novas informações para alterar o usuário.

    const { name, email, password } = req;

    const updatedUser = await this.prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name ? name : user.name,
        email: email ? email : user.email,
        password: password ? password : user.password,
      },
    });

    if (!updatedUser) {
      throw new HttpException("Erro ao atualizar usuário", HttpStatus.BAD_REQUEST);
    }
    return { msg: `Usuário ${updatedUser.name} atualizado com sucesso!` };
  }


  async remove(id: string) {
    const user = await this.getUserById(id);

    const deletedUser = await this.prisma.users.delete({
      where: {
        id: Number(id)
      },
    });

    if (!deletedUser) {
      throw new HttpException("Erro ao deletar usuário", HttpStatus.BAD_REQUEST);
    }

    return { msg: `Usuário ${user.name} Excluído com sucesso!` };
  }
}
