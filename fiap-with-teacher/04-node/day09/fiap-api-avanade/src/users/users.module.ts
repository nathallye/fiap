import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { PrismaService } from "../prisma.service";
import { EmailModule } from "../email/email.module";
import { EmailService } from "src/email/email.service";

@Module({
  imports: [EmailModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, EmailService]
})
export class UsersModule {}
