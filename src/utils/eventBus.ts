/*
 * @Description: emitter
 * @Author: Chetxu
 * @Date: 2022-06-17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-06 09:10:25
 */
import mitt, { EventType } from 'mitt'

export const emitter: Emiitter<Record<EventType, any>> = mitt() // 返回值是一个对象
