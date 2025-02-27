import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bindu-n-r.github.io/', // this is important for github pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

