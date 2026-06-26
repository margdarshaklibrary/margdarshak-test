import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://margdarshak.in',
  output: 'static',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.includes('/api/'),
    }),
  ],
});