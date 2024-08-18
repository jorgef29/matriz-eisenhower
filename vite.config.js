import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/matriz-eisenhower/', // Reemplaza 'nombre-repositorio' con el nombre de tu repositorio
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegúrate de que el directorio de salida sea 'dist'
  },
});
