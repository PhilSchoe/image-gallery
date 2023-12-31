import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    // tsconfig.vitest.json extends tsconfig.app.json, therefore vitest is set to include both
    checker({ vueTsc: { tsconfigPath: 'tsconfig.vitest.json' } })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    transformMode: {
      web: [/\.[jt]sx$/]
    },
    globals: true,
    deps: {
      inline: ['vuetify']
    }
  }
});
