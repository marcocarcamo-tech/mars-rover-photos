import { defineConfig } from 'vite'
import {resolve} from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  base: '/mars-rover-photos/',
  build: {
    
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})
