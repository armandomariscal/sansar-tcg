export enum Domain {
  DEVOPS = 'DevOps', 
  PRODUCT = 'Product', 
  CORE = 'Core', 
  BACKEND = 'Backend', 
  FRONTEND = 'Frontend', 
  SYSTEMS = 'Systems', 
  QUALITY = 'Quality'
}

export enum Seniority {
  JUNIOR = 'Junior', 
  MID = 'Mid', 
  SENIOR = 'Senior', 
  PRINCIPAL = 'Principal'
}

export interface CardStats {
  output: number;
  resilience: number;
  energy: number;
}

export interface Card {
  id: string;
  title: string;
  domain: Domain;
  seniority: Seniority;
  specialSkill: string;
  skills: string[];
  stats: CardStats;
  flavorText: string;
}

export interface GameState {
  playerHand: Card[];
  board: Card[];
  discardPile: Card[];
  activeEnergy: number;
  totalXP: number;
}