/*
* @Description: 移除坐标弹窗
* @Author: xuhuazhi
* @Date: 2022-07-09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-10 09:34:43
*/
import { Ref } from "vue";


export function click(map: Ref, popup: mapboxgl.Popup) {
  map.value.on('click', () => {
    map.value.getCanvas().style.cursor = '';
    popup.remove();
  });
}
