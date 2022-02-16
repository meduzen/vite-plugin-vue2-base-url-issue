import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  // root: 'src',
  base: '/vue-2-demo/',
  build: {
    outDir: `./dist/vue-2-demo`,
    emptyOutDir: true,
  },

  plugins: [createVuePlugin()],
})
