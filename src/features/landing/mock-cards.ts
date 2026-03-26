import { Card, Domain, Seniority } from '@/core/types';

export const starterCards: Card[] = [
  {
    id: 'cl-01',
    title: 'SRE Architect',
    domain: Domain.DEVOPS,
    seniority: Seniority.SENIOR,
    specialSkill: 'Zero Downtime',
    skills: ['Terraform', 'K8s', 'AWS'],
    stats: { output: 6, resilience: 9, energy: 5 },
    flavorText: 'Si nadie nota que existes, lo estás haciendo perfecto.'
  },
  {
    id: 'pd-01',
    title: 'Value Negotiator',
    domain: Domain.PRODUCT,
    seniority: Seniority.SENIOR,
    specialSkill: 'Stakeholder Alignment',
    skills: ['English C1', 'ROI', 'Metrics'],
    stats: { output: 5, resilience: 7, energy: 4 },
    flavorText: 'Traducir código a dinero es el verdadero superpoder.'
  },
  {
    id: 'cr-01',
    title: 'TS Master',
    domain: Domain.CORE,
    seniority: Seniority.SENIOR,
    specialSkill: 'Type Safety Blast',
    skills: ['Generics', 'AST', 'Patterns'],
    stats: { output: 9, resilience: 6, energy: 4 },
    flavorText: 'El error en tiempo de compilación es tu mejor amigo.'
  },
  {
    id: 'be-01',
    title: 'DDD Strategist',
    domain: Domain.BACKEND,
    seniority: Seniority.SENIOR,
    specialSkill: 'Context Mapping',
    skills: ['NodeJS', 'Clean Arch', 'SQL'],
    stats: { output: 8, resilience: 8, energy: 5 },
    flavorText: 'La lógica de negocio es sagrada; la base de datos es un detalle.'
  },
  {
    id: 'fe-01',
    title: 'UI Engineer',
    domain: Domain.FRONTEND,
    seniority: Seniority.SENIOR,
    specialSkill: 'State Machine Flow',
    skills: ['Next.js 15', 'Figma', 'Performance'],
    stats: { output: 7, resilience: 5, energy: 4 },
    flavorText: 'La interfaz es el contrato entre el humano y la máquina.'
  },
  {
    id: 'sy-01',
    title: 'Systems Lead',
    domain: Domain.SYSTEMS,
    seniority: Seniority.SENIOR,
    specialSkill: 'High Level Vision',
    skills: ['HLD', 'Scalability', 'Flows'],
    stats: { output: 6, resilience: 7, energy: 6 },
    flavorText: 'No vemos componentes, vemos flujos de información.'
  },
  {
    id: 'qa-01',
    title: 'Guardian of Truth',
    domain: Domain.QUALITY,
    seniority: Seniority.SENIOR,
    specialSkill: 'Contract Testing',
    skills: ['Playwright', 'Vitest', 'TDD'],
    stats: { output: 4, resilience: 10, energy: 3 },
    flavorText: 'Dormir tranquilo solo es posible con un test en verde.'
  }
];