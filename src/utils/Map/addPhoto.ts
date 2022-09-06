/*
 * @Description: 渲染图标坐标
 * @Author: Chetxu
 * @Date: 2022-07-09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-06 21:52:46
 */

import { Popups } from './Popups'
import { Ref } from 'vue'

export function addPhoto(map: Ref, popup: mapboxgl.Popup, geoPhoto: any) {
	map.value.on('load', () => {
		map.value.addSource('places', {
			type: 'geojson',
			data: geoPhoto,
		})

		// 添加一个显示位置的图层。
		map.value.addLayer({
			id: 'places',
			type: 'symbol',
			source: 'places',
			layout: {
				'icon-image': 'attraction',
				'icon-size': 2,
			},
		})
		Popups(map, popup)
	})
}
