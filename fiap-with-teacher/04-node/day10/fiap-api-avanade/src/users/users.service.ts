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

  // verifica se o usuário existe
  async getUserById(id: string): Promise<users> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: Number(id),
      }
    });

    if (!user) {
      throw new HttpException("Usuário não encontrado", HttpStatus.NOT_FOUND);
    }

    return user;
  }

  // verifica se o e-mail já está cadastrado
  async verifyUserExists(email: string): Promise<boolean> { // método para verificar se o usuário existe
    const user = await this.prisma.users.findUnique({
      where: {
        email: email
      }
    });

    return user ? true : false;
  }

  // criptografa a senha
  async crypto(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  }

  async create(data: CreateUserDTO): Promise<users> {
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

  async update(id: number, req: UpdateUserDTO): Promise<object>{
    // carregue os dados do usuário cujo id foi informado.
    // é feita a validação se o usuário existe com a função getUserById
    const user = await this.getUserById(id.toString());

    // extraindo as novas informações para alterar o usuário.
    const { name, email, password } = req;

    // antes de alterar um user no banco é necessário verificar se o e-mail está disponível
    if (email) {
      const checkEmail = await this.prisma.users.findMany({
        where: {
          AND: [{ email: email }, { id: { not: Number(id) } }]
        }
      });

      if (checkEmail.length > 0) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            message: "Este e-mail está indisponível!"
          },
          HttpStatus.FORBIDDEN
        );
      }
    }

    // vai retornar a atualização dos dados
    const updatedUser = await this.prisma.users.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name ? name : user.name,
        email: email ? email : user.email,
        password: password ? await this.crypto(password) : user.password
      }
    });

    // se updatedUser não existir(!)
    if (!updatedUser) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: "Erro ao atualizar usuário!"
        },
        HttpStatus.FORBIDDEN
      );
    }

    return { message: `Usuário ${updatedUser.name} atualizado com sucesso!` };
  }

  async remove(id: number) {
    const user = await this.getUserById(id.toString());

    const deletedUser = await this.prisma.users.delete({
      where: {
        id: Number(id)
      },
    });

    if (!deletedUser) {
      throw new HttpException(
        { status: HttpStatus.FORBIDDEN,
          mensage: "Erro ao deletar usuário"
        },
        HttpStatus.FORBIDDEN
      );
    }

    return { message: `Usuário ${user.name} Excluído com sucesso!` };
  }
}
