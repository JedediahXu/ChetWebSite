/*
 * @Description: 移除坐标弹窗
 * @Author: Chetxu
 * @Date: 2022-07-09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 10:09:57
 */
import { Ref } from 'vue'

export function click(map: Ref, popup: any) {
	map.value.on('click', () => {
		map.value.getCanvas().style.cursor = ''
		popup.remove()
	})
}
