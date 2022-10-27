import { TableColumnOptions } from "typeorm";

export const varcharColumn = (name = "name", length= "255", isNullable = false): TableColumnOptions => ({
  name,
  type: "varchar",
  length,
  isNullable
});
