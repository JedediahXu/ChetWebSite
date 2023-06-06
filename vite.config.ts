/* eslint-disable prettier/prettier */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import visualizer from 'rollup-plugin-visualizer'
import resolveExternalsPlugin from 'vite-plugin-resolve-externals'
// gzip压缩
import viteCompression from 'vite-plugin-compression'
const path = require('path')

export default defineConfig({
	build: {
		chunkSizeWarningLimit: 1500,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				},
			},
		},
	},
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router'],
			dts: 'src/auto-import.d.ts',
			resolvers: [ElementPlusResolver()],
		}),
		visualizer({
			open: true,
			gzipSize: true,
			brotliSize: true,
		}),
		Components({
			dirs: ['src/components'],
			resolvers: [ElementPlusResolver()],
			extensions: ['vue'],
			directoryAsNamespace: true,
		}),
		viteCompression(),
		resolveExternalsPlugin({
			Vue: 'Vue',
			axios: 'axios',
		}),
	],
	define: {
		'process.env': {},
		__VUE_OPTIONS_API__: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
		},
	},
	// base: '/',
	server: {
		//host: '10.101.126.3',
		port: 3066,
		open: true,
		proxy: {
			'/apis': {
				target: 'http://127.0.0.1:3007',
				ws: true,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/apis/, ''),
			},
			'/apicookie': {
				target: 'http://127.0.0.1:3008',
				ws: true,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/apicookie/, ''),
			},
			'/githubassets': {
				target: 'https://github.githubassets.com',
				ws: true,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/githubassets/, ''),
			},
			'/IP': {
				target: 'https://opendata.baidu.com/',
				ws: true,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/IP/, ''),
			},
		},
	},
})
