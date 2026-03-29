import { Domain } from './types';

export const domainToSlugMap: Record<Domain, string> = {
  [Domain.DEVOPS]: 'devops',
  [Domain.PRODUCT]: 'product',
  [Domain.CORE]: 'core',
  [Domain.BACKEND]: 'backend',
  [Domain.FRONTEND]: 'frontend',
  [Domain.SYSTEMS]: 'systems',
  [Domain.QUALITY]: 'quality',
};

export const slugToDomainMap: Record<string, Domain> = {
  devops: Domain.DEVOPS,
  product: Domain.PRODUCT,
  core: Domain.CORE,
  backend: Domain.BACKEND,
  frontend: Domain.FRONTEND,
  systems: Domain.SYSTEMS,
  quality: Domain.QUALITY,
};

export function domainToSlug(domain: Domain): string {
  return domainToSlugMap[domain];
}

export function slugToDomain(slug?: string): Domain | null {
  if (!slug) return null;
  return slugToDomainMap[slug.toLowerCase()] ?? null;
}