import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDTO} from "./createProduct.dto";

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
