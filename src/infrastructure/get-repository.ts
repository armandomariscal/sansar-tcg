import { SQLiteCardRepository } from './sqlite-repository';
import { MockCardRepository } from './mock-repository';

const PROVIDER = 'SQLITE'; 

export const cardRepository = PROVIDER === 'SQLITE' 
  ? new SQLiteCardRepository() 
  : new MockCardRepository();