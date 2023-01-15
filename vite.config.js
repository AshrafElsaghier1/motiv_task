import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  baser: "./motiv_task/",
  build: {
    chunkSizeWarningLimit: 2800,
  },
})
