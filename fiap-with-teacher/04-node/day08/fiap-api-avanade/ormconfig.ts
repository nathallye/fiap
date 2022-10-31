import { DataSource } from "typeorm";
import "dotenv/config";
import "reflect-metadata";

export const connectionSource = new DataSource({
  type: "mysql",
  host: String(process.env.TYPEORM_HOST),
  port: Number(process.env.TYPEORM_PORT),
  username: String(process.env.TYPEORM_USERNAME),
  password: String(process.env.TYPEORM_PASSWORD),
  database: String(process.env.TYPEORM_DATABASE),
  migrations: [`./typeorm/migration/**/*.ts`],
  logging: false,
  synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
});

// npm run migrate:create typeorm/migration/users

