/*
 * @Description: 转动后的天空层
 * @Author: Chetxu
 * @Date: 2022-07-09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-06 09:11:26
 */
import { Ref } from 'vue'

export function skyLoad(map: Ref) {
  map.value.on('load', () => {
    map.value.addLayer({
      id: 'sky',
      type: 'sky',
      paint: {
        'sky-type': 'atmosphere',
        'sky-atmosphere-sun': [0.0, 0.0],
        'sky-atmosphere-sun-intensity': 15,
      },
    })
  })
}
