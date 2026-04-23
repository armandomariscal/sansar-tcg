'use client'

import { useState } from 'react';
import { CardDisplay } from '@/components/ui-game/CardDisplay';
import { Card } from '@/core/types';

export function CardsGrid({ cards }: { cards: Card[] }) {
  const [open, setOpen] = useState(false);

  const MIN_SLOTS = 2;

  const slots: (Card | null)[] = [...cards];
  while (slots.length < MIN_SLOTS) {
    slots.push(null);
  }

  return (
    <>
      <div className="flex flex-wrap gap-8">
        {slots.map((card, index) =>
          card ? (
            <CardDisplay key={card.id} card={card} />
          ) : (
            <button
              key={`empty-${index}`}
              onClick={() => setOpen(true)}
              className="
                w-60 h-[340px]
                border-2 border-dashed border-neutral-600
                rounded-2xl
                flex items-center justify-center
                text-neutral-500
                cursor-pointer
                hover:border-neutral-400"
            >
              <span className="text-4xl font-bold">+</span>
            </button>
          )
        )}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-xl w-[400px]">
            <h2 className="font-bold mb-4">Create Card</h2>
                        <form
              onSubmit={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
              className="flex flex-col gap-3"
            >
              <input
                className="border p-2 rounded"
                placeholder="Title"
              />

              <input
                className="border p-2 rounded"
                placeholder="Special Skill"
              />

              <textarea
                className="border p-2 rounded"
                placeholder="Flavor Text"
              />

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    px-3 py-1
                    border rounded
                    cursor-pointer
                    hover:bg-neutral-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    px-3 py-1 
                    bg-black 
                    text-white 
                    cursor-pointer
                    rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}