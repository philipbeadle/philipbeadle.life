import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://philipbeadle.life',
  integrations: [tailwind({ applyBaseStyles: false })],
});
