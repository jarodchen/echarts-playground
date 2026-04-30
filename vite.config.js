import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // 使用相对路径，适配任何部署环境
  server: {
    port: 3000,
    open: true
  }
})
