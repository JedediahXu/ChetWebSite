/*
* @Description: 移除坐标弹窗
* @Author: Chetxu
* @Date: 2022-07-09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-23 22:01:24
*/
import { Ref } from "vue";


export function click(map: Ref, popup: mapboxgl.Popup) {
  map.value.on('click', () => {
    map.value.getCanvas().style.cursor = '';
    popup.remove();
  });
}
