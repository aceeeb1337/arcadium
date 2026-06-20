import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://arcadium.pk',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      iconDir: 'src/icons',
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
          manualChunks: {
            gsap: ['gsap'],
            lenis: ['lenis'],
            'split-type': ['split-type'],
          },
        },
      },
    },
    css: {
      devSourcemap: true,
    },
  },
  prefetch: true,
  compressHTML: true,
});
