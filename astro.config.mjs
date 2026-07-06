import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sunportparking.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date('2026-07-06'),
    }),
  ],
  // No adapter — pure static for Cloudflare Workers Static Assets
  // Deploy with: npm run build && npm run deploy
});
