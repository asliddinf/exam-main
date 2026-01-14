import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  id: 123456,
  title: "Telefon",
  description: "Yangi model",
  price: 500
})

