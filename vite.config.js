import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "https://ashrafelsaghier1.github.io/motiv_task/",
  build: {
    chunkSizeWarningLimit: 2800,
  },
  resolve: {
    alias: [
      {
        find: '@',
        "@assets": path.resolve(__dirname, './src/assets'),
      }]
  }

})
