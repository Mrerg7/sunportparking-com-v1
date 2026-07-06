export const SITE = {
  name: 'sunportparking.com',
  title: 'sunportparking.com — Premium Domain For Sale | Albuquerque Sunport Parking',
  description:
    'Own sunportparking.com — the exact-match premium .com domain for Albuquerque International Sunport (ABQ) airport parking. 5.3M+ annual passengers. High commercial intent. Serious offers welcome.',
  url: 'https://sunportparking.com/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Albuquerque, New Mexico',
  publishedDate: '2026-07-06',
  googleSiteVerification: 'efoeljjNnT5O5LSHipFtIVaL4qrJHw81boMOaWHdCOw',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '428535d1-331d-41a4-6ed9-c835c453a200',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('sunportparking.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring sunportparking.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const DISCLAIMER =
  'This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of July 6, 2026 and are subject to change.';
