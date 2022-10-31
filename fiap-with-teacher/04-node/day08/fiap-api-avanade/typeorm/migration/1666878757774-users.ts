import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { idColumn } from "../utils/idColumn";
import { varcharColumn } from "../utils/varcharColumn";

export class users1666878757774 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      // para criar é aqui dentro
      await queryRunner.createTable(new Table({
        name: "users", // nome da tabela
        columns: [
          idColumn("id"),
          varcharColumn("name", "100", false),
          varcharColumn("email", "255", false, true),
          varcharColumn("password", "64", false)
        ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      // para remover é aqui dentro
      await queryRunner.dropTable("users");
    }

}
