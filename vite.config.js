import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Define the config
export default defineConfig({
  // Plugins
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Build options
  build: {
    rollupOptions: {
      external: ['video.mp4']
    }
  }
})
