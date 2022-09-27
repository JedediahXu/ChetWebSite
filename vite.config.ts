import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import visualizer from 'rollup-plugin-visualizer'
import viteImagemin from 'vite-plugin-imagemin'
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
			open: true, //注意这里要设置为true，否则无效
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
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 20,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
	],
	define: {
		'process.env': {},
	},
	resolve: {
		alias: {
			// eslint-disable-next-line prettier/prettier
			'assets': path.resolve(__dirname, './src/assets'),
			'@': path.resolve(__dirname, './src'),
			'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
		},
	},
	// base: '/',
	server: {
		// host: '10.101.126.3',
		port: 3005,
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
			'/epi': {
				target: 'https://epiphanys.me',
				ws: true,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/epi/, ''),
			},
		},
	},
})
