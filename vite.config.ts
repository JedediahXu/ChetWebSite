import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import visualizer from 'rollup-plugin-visualizer'

const path = require('path')

export default defineConfig({
	build: {
		outDir: 'dist',
		// esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
		minify: 'esbuild',
		// 进行压缩计算
		brotliSize: false,
		terserOptions: {
			compress: {
				// 打包自动删除console
				drop_console: true,
				drop_debugger: true,
			},
			keep_classnames: true,
		},
		//chunk 大小警告的限制
		chunkSizeWarningLimit: 1500,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				},
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
			},
		},
	},
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router'],
			dts: 'src/auto-import.d.ts',
			resolvers: [ElementPlusResolver()],
			eslintrc: {
				enabled: true, // Default `false`
				filepath: './.eslintrc-auto-import.json', // 生成eslint自动导入的文件 `./.eslintrc-auto-import.json`
				globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
		}),
		//体积分析
		visualizer({
			open: true, // 设置为true，否则无效
			gzipSize: true,
			brotliSize: true,
		}),
		Components({
			dirs: ['src/components'],
			resolvers: [ElementPlusResolver()],
			extensions: ['vue'],
			directoryAsNamespace: true,
		}),
		//gzip静态资源压缩
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: 'gzip',
			ext: '.gz',
		}),
	],
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
				secure: false,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/IP/, ''),
			},
			'/epi': {
				target: 'https://epiphanys.me/',
				ws: true,
				secure: false,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/epi/, ''),
			},
		},
	},
})
