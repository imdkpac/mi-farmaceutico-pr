import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Acceso vía túneles (cloudflared/ngrok/tunnelmole) para iteración visual
  server: {
    port: 3000,
    allowedHosts: true,
  },
})
