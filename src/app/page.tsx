import { CardDisplay } from "@/components/ui-game/CardDisplay";
import { cardRepository } from "@/infrastructure/get-repository";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const repository = cardRepository;
  const cards = await repository.findAll();
  const activeCards = cards && cards.length > 0 ? cards : [];

  return (
    <main className="min-h-screen bg-neutral-900 p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-l-4 border-yellow-500 pl-6">
          <h1 className="text-white text-4xl font-black italic tracking-tighter">
            SANSAR TCG: THE CAREER EXPANSION
          </h1>
          <p className="text-neutral-400 text-sm mt-2">
            Software Architecture Game.
          </p>
        </header>

        {activeCards.length === 0 ? (
          <div className="text-center p-12 border border-dashed border-neutral-700 rounded-xl">
            <p className="text-neutral-400 mb-2">
              No se encontraron cartas en la base de datos local.
            </p>
            <p className="text-yellow-500 text-xs font-mono">
              Recuerda inicializar el entorno visitando /api/seed
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-8 justify-center">
            {}
            {[...activeCards].reverse().map((card) => (
              <CardDisplay key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
