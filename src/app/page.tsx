import { CardDisplay } from '@/components/ui-game/CardDisplay';
import { starterCards } from '@/features/landing/mock-cards';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-900 p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-l-4 border-yellow-500 pl-6">
          <h1 className="text-white text-4xl font-black italic tracking-tighter">SANSAR TCG: THE CAREER EXPANSION</h1>
          <p className="text-neutral-400 text-sm mt-2">Software Architecture Game.</p>
        </header>

        <div className="flex flex-wrap gap-8 justify-center">
          {[...starterCards].reverse().map((card) => (
            <CardDisplay key={card.id} card={card} />
          ))}
        </div>
      </div>
    </main>
  );
}