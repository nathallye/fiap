import { TableColumnOptions } from "typeorm";

export const idColumn = (name = "id"): TableColumnOptions => ({
  name,
  type: "int",
  isPrimary: true,
  isGenerated: true,
  generationStrategy: "increment"
});
