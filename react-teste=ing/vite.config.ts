import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'https://145.223.27.98:5030/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/auth/, '/auth')
      },
      '/users': {
        target: 'https://145.223.27.98:5030',
        changeOrigin: true,
        secure: false, // Adicionado para aceitar certificados autoassinados
        rewrite: (path) => path.replace(/^\/users/, '/users')
      },
      '/tasks': {
        target: 'https://145.223.27.98:5030',
        changeOrigin: true,
        secure: false, // Adicionado para aceitar certificados autoassinados
        rewrite: (path) => path.replace(/^\/tasks/, '/tasks')
      },
      '/roadmaps': {
        target: 'https://145.223.27.98:5030',
        changeOrigin: true,
        secure: false, // Adicionado para aceitar certificados autoassinados
        rewrite: (path) => path.replace(/^\/roadmaps/, '/roadmaps')
      },
      '/achievements': {
        target: 'https://145.223.27.98:5030',
        changeOrigin: true,
        secure: false, // Adicionado para aceitar certificados autoassinados
        rewrite: (path) => path.replace(/^\/achievements/, '/achievements')
      },
      'statistics':{
        target: 'https://145.223.27.98:5030',
        changeOrigin: true,
        secure: false, //Adicionando para aceitar certificados autoassinados

        rewrite: (path) => path.replace(/^\/statistics/, '/statistics')
      }
    }
  }
});