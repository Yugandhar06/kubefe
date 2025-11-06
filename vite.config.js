import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ------------------------------------------------------------------
  // FIX: This tells Vite to use relative URLs (e.g., './assets/')
  // instead of absolute URLs (e.g., '/assets/') for static assets.
  // This is crucial for deployment under non-root paths or in complex
  // web server environments like Tomcat/Kubernetes.
  // ------------------------------------------------------------------
  base: './'
})
