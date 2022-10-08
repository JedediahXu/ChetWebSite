/*
 * @Description: IP
 * @Author: ChetXu
 * @Date: 2022-09-05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 10:52:26
 */
import { queryIP, queryAmount } from '@/api'
import Cookies from 'js-cookie'
import useLanguage from '@/store/index'
const mainStore = useLanguage()

export default function () {
	const CheckId = Cookies.get('name')
	if (CheckId == undefined) {
		queryAmount().then(res => {
			mainStore.setTotalAmount(res.data.data[0].total_amount)
		})
	}
	const totalAmount = ref<number>()
	const cityname = ref<string>()
	queryIP(localStorage.getItem('Ip')).then(res => {
		cityname.value = res.data.data[0].location
	})
	return {
		cityname,
		totalAmount,
	}
}
