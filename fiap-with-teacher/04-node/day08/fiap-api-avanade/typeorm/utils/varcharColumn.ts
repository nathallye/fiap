import { TableColumnOptions } from "typeorm";

export const varcharColumn = (
  name = "name",
  length= "255",
  isNullable = false,
  isUnique = false
  ): TableColumnOptions => ({
  name,
  type: "varchar",
  length,
  isNullable,
  isUnique
});
