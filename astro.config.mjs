import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://washingtonbookkeeper.com',
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'never',
  // Emit /page.html instead of /page/index.html so Netlify serves /page
  // directly instead of redirecting it to /page/ (which conflicted with the
  // no-slash canonical and sitemap URLs on every page).
  build: { format: 'file' },
});
