import { PostgresCardRepository } from "./postgres-repository";
import { SQLiteCardRepository } from "./sqlite-repository";

export const cardRepository =
  process.env.DB_PROVIDER === "postgres"
    ? new PostgresCardRepository()
    : new SQLiteCardRepository();
