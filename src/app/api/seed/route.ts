import { NextResponse } from 'next/server';
import { cardRepository } from '@/infrastructure/get-repository';
import { starterCards } from '@/features/landing/mock-cards';

export async function GET() {
  await cardRepository.seed(starterCards);

  return NextResponse.json({
    message: "Seed sincronizado correctamente",
    total: starterCards.length,
  });
}