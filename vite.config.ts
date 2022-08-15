import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const path = require('path');


export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  plugins: [
    vue(), AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-import.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver()],
      extensions: ['vue'],
      directoryAsNamespace: true,
    }),],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // base: '/',
  server: {
    // host: '10.101.126.3',
    port: 8000,
    open: true,
    proxy: {
      '/apis': {
        target: 'http://127.0.0.1:3007',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, ''),
      },
      '/githubassets': {
        target: 'https://github.githubassets.com',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/githubassets/, ''),
      }
    },
  },
})

