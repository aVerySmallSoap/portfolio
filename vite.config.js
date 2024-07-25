import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions:{
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      }
    }
  },
  base: '/portfolio/',
  plugins: [vue()],
})