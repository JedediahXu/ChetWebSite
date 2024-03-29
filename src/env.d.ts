/// <reference types="vite/client" />

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
	declare module 'mapbox-gl'
	declare module 'mockjs'
}
declare module 'theme-change'
declare module 'ProgressCatalog'
declare interface Window {
	_hmt: any
}
