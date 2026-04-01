import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tailwindを追加

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),      // React用のプラグイン
    tailwindcss(), // Tailwind用のプラグイン（これを追加！）
  ],
})