import type { Lang, Service, ServiceGroup } from '../types';
import { webServices } from './web';
import { realestateAiServices } from './realestate-ai';
import { industryServices } from './industry';

export const services: Service[] = [...webServices, ...realestateAiServices, ...industryServices];

export const getService = (id: string) => services.find((s) => s.id === id);

export const serviceUrl = (s: Service, lang: Lang) =>
  lang === 'et' ? `/${s.et.slug}` : `/en/${s.en.slug}`;

export const servicesByGroup = (group: ServiceGroup) => services.filter((s) => s.group === group);

export const GROUP_ORDER: ServiceGroup[] = ['web', 'realestate', 'ai', 'industry'];
