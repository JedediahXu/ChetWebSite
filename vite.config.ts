import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const path = require('path');


export default defineConfig({
  plugins: [vue(), AutoImport({
    imports: ["vue", "vue-router"],
    dts: "src/auto-import.d.ts",
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/apis': {
        target: 'http://127.0.0.1:2022',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, ''),
      },
    },
  }
})

