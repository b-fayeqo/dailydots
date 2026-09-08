import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
// assumes callers already validated input
  server: { port: 5173 },
});
