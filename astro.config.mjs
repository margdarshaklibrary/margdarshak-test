import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://margdarshakss.com',
  output: 'server',
  adapter: vercel(),
  security: {
    checkOrigin: true,
    allowedDomains: [
      { hostname: 'margdarshakss.com', protocol: 'https' },
      { hostname: 'www.margdarshakss.com', protocol: 'https' },
      { hostname: 'courses.margdarshakss.com', protocol: 'https' },
      { hostname: 'internships.margdarshakss.com', protocol: 'https' },
      { hostname: 'library.margdarshakss.com', protocol: 'https' },
      { hostname: 'hostel.margdarshakss.com', protocol: 'https' },
      { hostname: 'digital.margdarshakss.com', protocol: 'https' },
      { hostname: '**.vercel.app', protocol: 'https' },
    ],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/admin/') &&
        !page.includes('/api/') &&
        !page.includes('/subdomains/'),
    }),
  ],
});