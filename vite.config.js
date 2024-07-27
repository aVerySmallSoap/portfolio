import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions:{
    external: ['vue','animeJS'],
    output: {
      globals: {
        vue: 'Vue',
        animeJS: 'animeJS',
      }
    }
  },
  base: '/portfolio/',
  plugins: [vue()],
})