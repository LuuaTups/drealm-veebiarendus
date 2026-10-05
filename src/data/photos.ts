import type { ImageMetadata } from 'astro';
import type { Lang, ServiceGroup } from './types';
import toolaud from '../assets/photos/toolaud.jpg';
import visand from '../assets/photos/visand.jpg';
import uusarendus from '../assets/photos/uusarendus.jpg';
import kontor from '../assets/photos/kontor.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: Record<Lang, string>;
}

export const PHOTOS = {
  desk: {
    src: toolaud,
    alt: {
      et: 'Sülearvuti, kohvitass ja märkmed laual akna all, taustal Tallinna paneelmaja',
      en: 'Laptop, coffee mug and notes on a desk by the window, a Tallinn apartment block outside',
    },
  },
  sketch: {
    src: visand,
    alt: {
      et: 'Kodulehe paigutuse visand paberil sülearvuti kõrval',
      en: 'A website layout sketched on paper next to a laptop',
    },
  },
  newBuild: {
    src: uusarendus,
    alt: {
      et: 'Tühi korter uusarenduses, aknast paistavad ehituskraana ja uued majad',
      en: 'An empty flat in a new development, with a construction crane and new buildings outside',
    },
  },
  office: {
    src: kontor,
    alt: {
      et: 'Väikeettevõtte kontorilaud arvete virna, kalkulaatori ja Exceli tabeliga',
      en: 'A small-business office desk with a pile of invoices, a calculator and an Excel sheet',
    },
  },
} satisfies Record<string, Photo>;

export const GROUP_PHOTO: Record<ServiceGroup, Photo> = {
  web: PHOTOS.sketch,
  realestate: PHOTOS.newBuild,
  ai: PHOTOS.office,
  industry: PHOTOS.desk,
};
