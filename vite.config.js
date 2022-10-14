import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 2333,
  },
  // server: {
  //   port: 3000,
  //   // 跨域代理有点问题
  //   "proxy": {
  //     "/api": {
  //       "target": "https://api.bilibili.com",
  //       "changeOrigin": true,
  //       "pathRewrite": {
  //         "^/api": ""
  //       }
  //     }
  //   },
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
  }
})
