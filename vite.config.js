import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/BANK_MODERN_APP-React",
  plugins: [react()],
})
