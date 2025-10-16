// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://buildLittleWorlds.github.io',
  base: '/no-disclosure-site',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
