import { ICardRepository } from '@/core/repository';
import { Card } from '@/core/types';
import { createClient } from '@libsql/client';

const client = createClient({ url: 'file:local.db' });

export class SQLiteCardRepository implements ICardRepository {
  async getCards(): Promise<Card[]> {
    const rs = await client.execute("SELECT * FROM cards");

    return rs.rows.map(row => ({
       id: row.id as string,
       title: row.title as string,
    })) as Card[];
  }

  async getCardById(id: string): Promise<Card | null> {
    return null; 
  }
}