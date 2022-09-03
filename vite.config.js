import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    base: '/mars-rover-photos/'
    ,
    rollupOptions: {
      external: /^lit/
    }
  }
})
