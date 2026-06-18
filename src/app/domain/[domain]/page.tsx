import Link from "next/link";
import { starterCards } from "@/features/landing/mock-cards";
import { slugToDomain } from "@/core/domain-mapper";
import { CardsGrid } from "@/components/ui-game/CardsGrid";
import { routes } from "@/core/routes";

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
      <Link
        href={routes.home}
        className="inline-block mb-6 text-blue-400 hover:text-blue-300"
      >
        ← Home
      </Link>

      <h1 className="text-white text-3xl font-bold mb-8">Domain: {domain}</h1>

      <CardsGrid cards={cards} />
    </main>
  );
}
