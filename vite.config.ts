import { fileURLToPath, URL } from 'url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/skiercon-akredytacja/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
