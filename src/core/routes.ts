import { Domain } from './types';
import { domainToSlug } from './domain-mapper';

export const routes = {
    domain: (domain: Domain) => `/domain/${domainToSlug(domain)}`,
};