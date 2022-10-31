import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  description: string;

  // @IsNumber({ maxDecimalPlaces: 2 })
  @IsString()
  @IsNotEmpty()
  // quantity: number;
  quantity: string;

  // @IsNumber({ maxDecimalPlaces: 2 })
  @IsString()
  @IsNotEmpty()
  // value: number;
  value: string;
}
