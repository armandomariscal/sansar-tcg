import { ICardRepository } from "@/core/repository";
import { Card } from "@/core/types";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

export class PostgresCardRepository implements ICardRepository {
  async findAll(): Promise<Card[]> {
    const query = "SELECT * FROM cards";
    const { rows } = await pool.query(query);

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      domain: row.domain as any,
      seniority: row.seniority as any,
      specialSkill: row.special_skill,
      skills:
        typeof row.skills === "string" ? JSON.parse(row.skills) : row.skills,
      stats: typeof row.stats === "string" ? JSON.parse(row.stats) : row.stats,
      flavorText: row.flavor_text,
    }));
  }

  async findById(id: string): Promise<Card | null> {
    const query = "SELECT * FROM cards WHERE id = $1";
    const { rows } = await pool.query(query, [id]);

    if (rows.length === 0) return null;

    const row = rows[0];

    return {
      id: row.id,
      title: row.title,
      domain: row.domain as any,
      seniority: row.seniority as any,
      specialSkill: row.special_skill,
      skills:
        typeof row.skills === "string" ? JSON.parse(row.skills) : row.skills,
      stats: typeof row.stats === "string" ? JSON.parse(row.stats) : row.stats,
      flavorText: row.flavor_text,
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
    const { rows } = await pool.query("SELECT id FROM cards");
    const existingIds = new Set(rows.map((r) => r.id));
    const incomingIds = new Set(cards.map((c) => c.id));

    for (const card of cards) {
      const skillsJson = JSON.stringify(card.skills);
      const statsJson = JSON.stringify(card.stats);

      if (existingIds.has(card.id)) {
        const updateQuery = `
          UPDATE cards SET
            title = $1,
            domain = $2,
            seniority = $3,
            special_skill = $4,
            skills = $5,
            stats = $6,
            flavor_text = $7
          WHERE id = $8
        `;
        await pool.query(updateQuery, [
          card.title,
          card.domain,
          card.seniority,
          card.specialSkill,
          skillsJson,
          statsJson,
          card.flavorText,
          card.id,
        ]);
      } else {
        const insertQuery = `
          INSERT INTO cards (
            id, title, domain, seniority,
            special_skill, skills, stats, flavor_text
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;
        await pool.query(insertQuery, [
          card.id,
          card.title,
          card.domain,
          card.seniority,
          card.specialSkill,
          skillsJson,
          statsJson,
          card.flavorText,
        ]);
      }
    }

    for (const id of existingIds) {
      if (!incomingIds.has(id)) {
        await pool.query("DELETE FROM cards WHERE id = $1", [id]);
      }
    }
  }
}
