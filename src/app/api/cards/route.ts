import { NextResponse } from 'next/server';
import { cardRepository } from '@/infrastructure/get-repository';

export async function GET() {
  const cards = await cardRepository.getCards();
  return NextResponse.json(cards);
}