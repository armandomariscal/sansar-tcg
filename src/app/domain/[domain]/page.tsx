import { starterCards } from '@/features/landing/mock-cards';
import { CardDisplay } from '@/components/ui-game/CardDisplay';
import { slugToDomain } from '@/core/domain-mapper';

type Props = {
    params: Promise<{
        domain?: string;
    }>;
};

export default async function DomainPage({ params }: Props) {
    const { domain: raw } = await params;

    const domain = slugToDomain(raw);

    if (!domain) {
        return <div className="text-white">Invalid domain</div>;
    }

    const cards = starterCards.filter((c) => c.domain === domain);

    return (
        <main className="min-h-screen bg-neutral-900 p-12">
            <h1 className="text-white text-3xl font-bold mb-8">
                Domain: {domain}
            </h1>

        <div className="flex flex-wrap gap-8">
            {cards.map((card) => (
                <CardDisplay key={card.id} card={card} />
            ))}
        </div>
        </main>
    );
}