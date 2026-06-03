import { SQLiteCardRepository } from "./sqlite-repository";
import { PostgresCardRepository } from "./postgres-repository";
import { ICardRepository } from "@/core/repository";

export function getCardRepository(): ICardRepository {
  console.log(console.log("DB_PROVIDER =", process.env.DB_PROVIDER));
  if (process.env.DB_PROVIDER === "postgres") {
    return new PostgresCardRepository();
  }
  return new SQLiteCardRepository();
}
