import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hfhcd.herokuapp.com',
  preview: true,
  server: {
    port: 3000,
    host: true
  },
  build: {
    format: 'file'
  }
});