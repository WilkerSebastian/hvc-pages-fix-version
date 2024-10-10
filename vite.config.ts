import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve('./index.html'),
        documentation: resolve('./pages/documentation.html'),
        playground: resolve('./pages/playground.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
});