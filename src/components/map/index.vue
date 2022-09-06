<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="footprint">
		<div class="footprint-map">
			<div class="mapbox-wrapper">
				<div class="mapbox mapboxgl-map">
					<div class="mapboxgl-canary"></div>
					<div class="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
						<div id="mapContainer" ref="mapDivElement" tabindex="0" aria-label="Map" role="region" width="100%" class="mapContainer" height="39vh;"></div>
					</div>
					<div class="mapboxgl-control-container">
						<div class="mapboxgl-ctrl-bottom-left">
							<div class="mapboxgl-ctrl"><a class="mapboxgl-ctrl-logo" target="_blank" rel="noopener nofollow" href="https://www.mapbox.com/" aria-label="Mapbox logo"></a></div>
						</div>
					</div>
				</div>
				<div class="toolbar">
					<a class="button" rel="external nofollow noopener" target="_blank" href="https://www.google.com/maps/d/embed?mid=1sRx6t0Yj1TutbwORCvjwTMgr70r62Z6w&amp;z=3">
						<i class="iconfont icon-google-maps"></i>
					</a>
					<button class="button" @click="great">
						<i class="iconfont icon-fullscreen"></i>
					</button>
				</div>
			</div>
			<div class="legends">
				<div class="now" @click="displayBut">
					<i class="iconfont icon-location"></i>
					<span class="text">苟活于此，代码为伴</span>
				</div>
				<ul class="folders">
					<li class="item" @click="displayPhot(0)">
						<i class="iconfont icon-route"> </i><span class="text">2022 山东淄博</span>
						<span class="count">(2)</span>
					</li>
					<li class="item" @click="displayPhot(1)">
						<i class="iconfont icon-route"> </i><span class="text">2018 山东滕州</span>
						<span class="count">(1)</span>
					</li>
					<li class="item" @click="displayPhot(2)">
						<i class="iconfont icon-route"></i>
						<span class="text">2012 上海世博</span>
						<span class="count">(0)</span>
					</li>
					<li class="item" @click="displayPhot(3)">
						<i class="iconfont icon-route"></i>
						<span class="text">2008 山东临沂</span>
						<span class="count">(0)</span>
					</li>
					<li class="item">
						<i class="iconfont icon-route"></i>
						<span class="text">•••</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { geoPhoto, geoData } from '../../../public/config'
import { initDragMap } from '@/utils/Map/drawMap'
import { ElMessage } from 'element-plus'
import mapboxgl from 'mapbox-gl'

const popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false,
})

//地图数据
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { map, mapDivElement, marker } = initDragMap(mapboxgl, popup, geoPhoto, geoData)

//地图按钮
const great = () => {
	ElMessage({
		message: h('p', null, [h('span', null, '全屏等功能后续开发...'), h('i', { style: 'color: teal' }, 'ChetSerenade')]),
	})
}

//主菜单
const displayBut = () => {
	map.value.flyTo({ center: [Number(118.04290297151124), Number(36.80807022921253)], zoom: 12 })
}

//地图左侧菜单
const displayPhot = (i: number) => {
	const mapContainer = geoPhoto.features[i].geometry.coordinates
	map.value.flyTo({ center: [mapContainer[0], mapContainer[1]], zoom: 14 })
	popup.setLngLat([mapContainer[0], mapContainer[1]]).setHTML(geoPhoto.features[i].properties.description).addTo(map.value)
}
</script>
