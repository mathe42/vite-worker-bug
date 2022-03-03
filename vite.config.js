import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // for debug
    minify: false, 
  },
  worker: {
    format: 'es'
  }
})