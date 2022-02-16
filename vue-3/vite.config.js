import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // root: 'src',
  base: '/vue-3-demo/',
  build: {
    outDir: `./dist/vue-3-demo`,
    emptyOutDir: true,
  },

  plugins: [vue()],
})
