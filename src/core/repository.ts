import { Card, Domain } from './types';

export interface CardFilters {
  domain?: Domain;
  minOutput?: number;
  search?: string;
}

export interface ICardRepository {
  findAll(filters?: CardFilters): Promise<Card[]>;
  findById(id: string): Promise<Card | null>;
  
  create(card: Omit<Card, 'id'>): Promise<Card>;
  update(id: string, card: Partial<Card>): Promise<Card>;
  delete(id: string): Promise<boolean>;

  getRandomCards(limit: number): Promise<Card[]>;
  getStatsByDomain(): Promise<Record<Domain, number>>;

  seed(cards: Card[]): Promise<void>;
}