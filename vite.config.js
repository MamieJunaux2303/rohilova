import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Compatibilité avec les téléphones et navigateurs anciens,
    // encore très répandus à Madagascar : Vite produit une seconde
    // version du site, plus lourde, chargée seulement par les
    // navigateurs qui ne comprennent pas la version moderne.
    legacy({
      targets: ['defaults', 'chrome >= 49', 'safari >= 10', 'samsung >= 5', 'firefox >= 52'],
    }),
  ],
})