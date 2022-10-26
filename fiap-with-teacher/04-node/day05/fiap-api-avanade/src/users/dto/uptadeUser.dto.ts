import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./createUser.dto";

export class UpdateUserDTO extends PartialType(CreateUserDTO) {} // PartialType está pegando tudo que existe dentro do CreateUserDTO só que é opcional
