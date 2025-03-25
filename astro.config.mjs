import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import path from 'path';
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  resolve: {
    alias: {
      '@': path.resolve('./src'), // Ajusta la ruta según la estructura de tu proyecto
      '@i18n': path.resolve('./src/i18n'),
    },
  },
});