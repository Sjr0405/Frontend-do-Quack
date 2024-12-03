import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/users': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users/, '/api/users')
      },
      '/api/users/address/update': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users\/address\/update/, '/api/users/address/update')
      },
      '/api/users/address/create': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users\/address\/create/, '/api/users/address/create')
      },
      '/api/users/achievement/create': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users\/achievement\/create/, '/api/users/achievement/create')
      },
      '/api/users/address/getAll': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users\/address\/getAll/, '/api/users/address/getAll')
      },
      '/api/users/achievement/getAll': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users\/achievement\/getAll/, '/api/users/achievement/getAll')
      },
      '/api/users/login': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users\/login/, '/api/users/login')
      },
      '/api/users/create': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users\/create/, '/api/users/create')
      },
      '/api/tasks': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/tasks/, '/api/tasks')
      },
      '/api/steps': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/steps/, '/api/steps')
      },
      '/api/roadmaps': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/roadmaps/, '/api/roadmaps')
      },
      '/api/roadmaps/category': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/roadmaps\/category/, '/api/roadmaps/category')
      },
      '/api/achievements': {
        target: 'https://localhost:5030',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/achievements/, '/api/achievements')
      }
    }
  }
});