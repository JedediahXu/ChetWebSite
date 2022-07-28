/*
* @Description: 渲染图标坐标
* @Author: xuhuazhi
* @Date: 2022-07-09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-27 14:11:03
*/

import { Popups } from './Popups'
import { Ref } from "vue";

export function addPhoto(map: Ref, popup: mapboxgl.Popup, geoPhoto: any) {

  map.value.on("load", () => {
    map.value.addSource('places', {
      type: 'geojson',
      data: geoPhoto,
    });

    // 添加一个显示位置的图层。
    map.value.addLayer({
      id: "places",
      type: 'symbol',
      source: "places",
      layout: {
        'icon-image': 'attraction',
        'icon-size': 2
      },
    })
    Popups(map, popup)
  }
  )
}
