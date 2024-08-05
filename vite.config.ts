/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'test/vitest.setup.ts',
    coverage: {
      include: ['src/**/*']
    }
  }
})
