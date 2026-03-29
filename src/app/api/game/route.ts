import { NextResponse } from 'next/server';

export async function GET() {
    const gameState = {
        status: "READY",
        serverTime: new Date().toISOString(),
        version: "0.1.0"
    };

    return NextResponse.json(gameState);
}