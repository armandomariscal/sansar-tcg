import { routes } from '@/core/routes';
import { Card, Domain } from '@/core/types';
import Link from 'next/link';
import React from 'react';

const domainStyles: Record<Domain, string> = {
  [Domain.DEVOPS]: 'border-red-600 bg-red-50 text-red-900',
  [Domain.PRODUCT]: 'border-orange-500 bg-orange-50 text-orange-900',
  [Domain.CORE]: 'border-yellow-500 bg-yellow-50 text-yellow-900',
  [Domain.BACKEND]: 'border-green-600 bg-green-50 text-green-900',
  [Domain.FRONTEND]: 'border-blue-400 bg-blue-50 text-blue-900',
  [Domain.SYSTEMS]: 'border-blue-800 bg-blue-50 text-blue-900',
  [Domain.QUALITY]: 'border-purple-600 bg-purple-50 text-purple-900',
};

export const CardDisplay = ({ card }: { card: Card }) => {
  return (
    <Link href={routes.domain(card.domain)} className={`w-60 h-85 border-4 rounded-2xl p-4 shadow-xl flex flex-col justify-between transition-all hover:-translate-y-2 cursor-pointer ${domainStyles[card.domain]}`}>
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">{card.domain}</span>
          <h3 className="font-black text-xl leading-tight">{card.title}</h3>
        </div>
        <div className="bg-white/80 rounded-full w-8 h-8 flex items-center justify-center font-bold border">
          {card.stats.energy}
        </div>
      </div>

      <div className="flex-grow my-4 bg-white/40 rounded-lg border border-dashed border-current/20 flex flex-col p-3">
        <span className="text-[10px] font-bold mb-1 opacity-60">SPECIAL SKILL:</span>
        <span className="font-bold text-sm mb-2">✨ {card.specialSkill}</span>
        
        <div className="flex flex-wrap gap-1 mt-auto">
          {card.skills.map(s => (
            <span key={s} className="px-2 py-0.5 bg-white/60 rounded text-[9px] font-bold border border-current/10 uppercase">{s}</span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] italic mb-3 opacity-80 leading-tight">"{card.flavorText}"</p>
        <div className="flex justify-between items-center border-t border-current/20 pt-2">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold opacity-60">OUTPUT</span>
            <span className="text-lg font-black">{card.stats.output}</span>
          </div>
          <div className="px-2 py-0.5 rounded border border-current/30 text-[10px] font-bold">
            {card.seniority}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-bold opacity-60">UPTIME</span>
            <span className="text-lg font-black">{card.stats.resilience}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};