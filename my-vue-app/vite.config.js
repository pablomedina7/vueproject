import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'public/index.html',
        sobreNosotros: 'public/sobre_nosotros.html',
        contacto: 'public/contacto.html'
      }
    }
  },
  server: {
    base: '/',
  },
});
