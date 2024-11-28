import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/auth/, '/auth')
      },
      '/users': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/users/, '/users')
      },
      '/tasks': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/tasks/, '/tasks')
      },
      '/roadmaps': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/roadmaps/, '/roadmaps')
      },
      '/achievements': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/achievements/, '/achievements')
      },
      '/statistics': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/statistics/, '/statistics')
      }
    }
  },
});