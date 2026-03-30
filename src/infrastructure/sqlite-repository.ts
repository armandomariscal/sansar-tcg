import { ICardRepository } from '@/core/repository';
import { Card } from '@/core/types';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.DATABASE_URL as string,
});

export class SQLiteCardRepository implements ICardRepository {

  async findAll(): Promise<Card[]> {
    const rs = await client.execute("SELECT * FROM cards");

    return rs.rows.map(row => ({
      id: row.id as string,
      title: row.title as string,
      domain: row.domain as any,
      seniority: row.seniority as any,
      specialSkill: row.special_skill as string,
      skills: JSON.parse(row.skills as string),
      stats: JSON.parse(row.stats as string),
      flavorText: row.flavor_text as string,
    }));
  }

  async findById(id: string): Promise<Card | null> {
    const rs = await client.execute({
      sql: "SELECT * FROM cards WHERE id = ?",
      args: [id],
    });

    if (rs.rows.length === 0) return null;

    const row = rs.rows[0];

    return {
      id: row.id as string,
      title: row.title as string,
      domain: row.domain as any,
      seniority: row.seniority as any,
      specialSkill: row.special_skill as string,
      skills: JSON.parse(row.skills as string),
      stats: JSON.parse(row.stats as string),
      flavorText: row.flavor_text as string,
    };
  }

  async create(): Promise<Card> {
    throw new Error("Not implemented");
  }

  async update(): Promise<Card> {
    throw new Error("Not implemented");
  }

  async delete(): Promise<boolean> {
    throw new Error("Not implemented");
  }

  async getRandomCards(): Promise<Card[]> {
    throw new Error("Not implemented");
  }

  async getStatsByDomain(): Promise<Record<string, number>> {
    throw new Error("Not implemented");
  }

  async seed(cards: Card[]): Promise<void> {
    const rs = await client.execute("SELECT id FROM cards");
    const existingIds = new Set(rs.rows.map(r => r.id as string));

    const incomingIds = new Set(cards.map(c => c.id));

    for (const card of cards) {
      if (existingIds.has(card.id)) {
        await client.execute({
          sql: `
            UPDATE cards SET
              title = ?,
              domain = ?,
              seniority = ?,
              special_skill = ?,
              skills = ?,
              stats = ?,
              flavor_text = ?
            WHERE id = ?
          `,
          args: [
            card.title,
            card.domain,
            card.seniority,
            card.specialSkill,
            JSON.stringify(card.skills),
            JSON.stringify(card.stats),
            card.flavorText,
            card.id,
          ],
        });
      } else {
        await client.execute({
          sql: `
            INSERT INTO cards (
              id, title, domain, seniority,
              special_skill, skills, stats, flavor_text
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `,
          args: [
            card.id,
            card.title,
            card.domain,
            card.seniority,
            card.specialSkill,
            JSON.stringify(card.skills),
            JSON.stringify(card.stats),
            card.flavorText,
          ],
        });
      }
    }
    for (const id of existingIds) {
      if (!incomingIds.has(id)) {
        await client.execute({
          sql: "DELETE FROM cards WHERE id = ?",
          args: [id],
        });
      }
    }
  }
}