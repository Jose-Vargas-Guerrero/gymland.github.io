import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://Jose-Vargas-Guerrero.github.io',
  base: '/gymland.github.io',
});