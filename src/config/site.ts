export const SITE = {
  name: 'sunportparking.com',
  title: 'sunportparking.com | Premium Domain for Sale | Albuquerque Sunport Parking',
  description:
    'sunportparking.com is for sale — the exact-match premium .com for Albuquerque International Sunport (ABQ) airport parking. 5.3M+ annual passengers. Submit your best offer via secure escrow.',
  keywords:
    'sunportparking.com for sale, buy sunport parking domain, Albuquerque Sunport parking domain, premium domain names, airport parking domain, exact match domain, ABQ parking',
  url: 'https://sunportparking.com/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Albuquerque, New Mexico',
  publishedDate: '2026-07-06',
  modifiedDate: '2026-10-03',
  googleSiteVerification: 'efoeljjNnT5O5LSHipFtIVaL4qrJHw81boMOaWHdCOw',
  // Optional: paste a Cloudflare Web Analytics token here to enable analytics.
  // Leave empty for zero third-party requests (default, fastest + most private).
  analyticsToken: '',
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
